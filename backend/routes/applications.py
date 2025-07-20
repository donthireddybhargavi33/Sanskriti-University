from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Application
from extension import db
from datetime import datetime
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

applications_bp = Blueprint('applications', __name__, url_prefix='/api/applications')

# Add a test route to verify the blueprint is registered
@applications_bp.route('/test', methods=['GET'])
def test_route():
    logger.info("Test route accessed")
    return jsonify({"status": "ok", "message": "Applications blueprint is working"}), 200

@applications_bp.route('/submit', methods=['POST'])
def submit_application():
    logger.info("\n=== New Application Submission ===")
    logger.info(f"Request URL: {request.url}")
    logger.info(f"Request Method: {request.method}")
    logger.info(f"Request Headers: {dict(request.headers)}")
    logger.info(f"Raw Data: {request.get_data()}")
    logger.info(f"Request Path: {request.path}")
    logger.info(f"Full URL: {request.url}")
    
    # Log the application's URL map for debugging
    logger.info("\nAvailable Routes:")
    for rule in current_app.url_map.iter_rules():
        logger.info(f"{rule.endpoint}: {rule.methods} {rule.rule}")
    
    try:
        data = request.get_json()
        if not data:
            logger.warning("No JSON data received")
            return jsonify({'error': 'No data received'}), 400

        logger.info(f"Received application data: {data}")
        
        required_fields = ['fullName', 'email', 'mobile', 'state', 'city']
        if not all(field in data for field in required_fields):
            missing = [field for field in required_fields if field not in data]
            logger.warning(f"Missing required fields: {missing}")
            return jsonify({'error': f'Missing required fields: {missing}'}), 400

        try:
            # Create new application
            new_application = Application(
                full_name=data['fullName'],
                email=data['email'],
                mobile=data['mobile'],
                state=data['state'],
                city=data['city'],
                course=data.get('course', ''),
                message=data.get('message', ''),
                status='pending',
                submitted_at=datetime.utcnow()
            )
            
            # Log the application object before saving
            logger.info(f"Created application object: {vars(new_application)}")
            
            # Try to add to database
            db.session.add(new_application)
            logger.info("Added application to session")
            
            # Try to commit
            db.session.commit()
            logger.info(f"Successfully committed application with ID: {new_application.id}")
            
            return jsonify({
                'message': 'Application submitted successfully',
                'application_id': new_application.id
            }), 201
            
        except Exception as db_error:
            db.session.rollback()
            logger.error(f"Database error details: {str(db_error)}")
            return jsonify({
                'error': 'Database error while saving application. Please try again.'
            }), 500

    except Exception as e:
        logger.error(f"Server error: {str(e)}")
        return jsonify({
            'error': 'Server error. Please try again later.'
        }), 500

@applications_bp.route('/list', methods=['GET'])
@jwt_required()
def get_applications():
    try:
        logger.info("Fetching applications list")
        # Change ordering to ascending by submitted_at
        applications = Application.query.order_by(Application.submitted_at.asc()).all()
        
        applications_list = [{
            'id': app.id,
            'fullName': app.full_name,
            'email': app.email,
            'mobile': app.mobile,
            'state': app.state,
            'city': app.city,
            'course': app.course,
            'message': app.message,
            'status': app.status,
            'submitted_at': app.submitted_at.isoformat() + 'Z'
        } for app in applications]
        
        logger.info(f"Successfully fetched {len(applications_list)} applications")
        return jsonify(applications_list), 200
        
    except Exception as e:
        logger.error(f"Error fetching applications: {str(e)}")
        return jsonify({'error': 'Failed to fetch applications'}), 500

@applications_bp.route('/<int:app_id>', methods=['PUT'])
@jwt_required()
def update_application_status(app_id):
    try:
        logger.info(f"Updating application status for ID: {app_id}")
        data = request.get_json()
        
        if not data or 'status' not in data:
            logger.warning("Status not provided in request")
            return jsonify({'error': 'Status not provided'}), 400
            
        application = Application.query.get_or_404(app_id)
        application.status = data['status']
        
        db.session.commit()
        logger.info(f"Successfully updated status to {data['status']} for application {app_id}")
        
        return jsonify({'message': 'Application status updated successfully'}), 200
        
    except Exception as e:
        logger.error(f"Error updating application status: {str(e)}")
        return jsonify({'error': 'Failed to update application status'}), 500

@applications_bp.route('/clear', methods=['DELETE'])
@jwt_required()
def clear_applications():
    try:
        logger.info("Clearing all application records")
        num_deleted = Application.query.delete()
        db.session.commit()
        logger.info(f"Deleted {num_deleted} application records")
        return jsonify({'message': f'Successfully deleted {num_deleted} application records'}), 200
    except Exception as e:
        db.session.rollback()
        logger.error(f"Error clearing applications: {str(e)}")
        return jsonify({'error': 'Failed to clear applications'}), 500

@applications_bp.route('/<int:app_id>', methods=['DELETE'])
@jwt_required()
def delete_application(app_id):
    try:
        logger.info(f"Deleting application with ID: {app_id}")
        application = Application.query.get_or_404(app_id)
        db.session.delete(application)
        db.session.commit()
        logger.info(f"Successfully deleted application with ID: {app_id}")
        return jsonify({'message': f'Application {app_id} deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        logger.error(f"Error deleting application {app_id}: {str(e)}")
        return jsonify({'error': f'Failed to delete application {app_id}'}), 500
