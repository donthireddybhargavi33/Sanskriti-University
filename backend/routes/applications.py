from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Application
from extension import db

applications_bp = Blueprint('applications', __name__)

@applications_bp.route('/', methods=['POST'])
def submit_application():
    print("\n=== New Application Submission ===")
    print("Headers:", dict(request.headers))
    
    data = request.get_json()
    print("Request data:", data)
    
    required_fields = ['fullName', 'email', 'mobile', 'state', 'city']
    if not all(field in data for field in required_fields):
        missing = [field for field in required_fields if field not in data]
        print(f"Missing required fields: {missing}")
        return jsonify({'error': f'Missing required fields: {missing}'}), 400

    try:
        # First check if we can query the database
        try:
            existing_count = Application.query.count()
            print(f"Current number of applications in database: {existing_count}")
        except Exception as db_err:
            print(f"Database check failed: {str(db_err)}")
            return jsonify({'error': 'Database connection error'}), 500

        application = Application(
            fullName=data['fullName'],
            email=data['email'],
            mobile=data['mobile'],
            state=data['state'],
            city=data['city']
        )
        
        db.session.add(application)
        db.session.commit()
        print(f"Application created successfully with ID: {application.id}")
        
        # Verify the application was saved
        saved_app = Application.query.get(application.id)
        if saved_app:
            print(f"Verified: Application {application.id} exists in database")
        else:
            print(f"Warning: Application {application.id} not found after save!")
            
    except Exception as e:
        print(f"Error saving application: {str(e)}")
        db.session.rollback()
        return jsonify({'error': f'Error saving application: {str(e)}'}), 500
    
    return jsonify({
        'message': 'Application submitted successfully',
        'applicationId': application.id
    }), 201

@applications_bp.route('/', methods=['GET'])
@jwt_required()
def get_applications():
    print("\n=== Fetching Applications ===")
    print("Current user:", get_jwt_identity())
    
    try:
        # First check if we can query the database
        try:
            total_count = Application.query.count()
            print(f"Total applications in database: {total_count}")
        except Exception as db_err:
            print(f"Database check failed: {str(db_err)}")
            return jsonify({'error': 'Database connection error'}), 500
            
        applications = Application.query.order_by(Application.submittedAt.desc()).all()
        print(f"Retrieved {len(applications)} applications")
        
        result = [{
            'id': app.id,
            'fullName': app.fullName,
            'email': app.email,
            'mobile': app.mobile,
            'state': app.state,
            'city': app.city,
            'submittedAt': app.submittedAt.isoformat(),
            'status': app.status
        } for app in applications]
        
        print("Application IDs retrieved:", [app['id'] for app in result])
        return jsonify(result), 200
        
    except Exception as e:
        print(f"Error fetching applications: {str(e)}")
        return jsonify({'error': f'Error fetching applications: {str(e)}'}), 500

@applications_bp.route('/<int:app_id>', methods=['PUT'])
@jwt_required()
def update_application_status(app_id):
    data = request.get_json()
    
    if not data or 'status' not in data:
        return jsonify({'error': 'Status not provided'}), 400
        
    application = Application.query.get_or_404(app_id)
    application.status = data['status']
    
    db.session.commit()
    
    return jsonify({'message': 'Application status updated successfully'}), 200
