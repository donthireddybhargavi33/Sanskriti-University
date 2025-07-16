from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models import Admin, db

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'error': 'Missing email or password'}), 400

    admin = Admin.query.filter_by(email=data['email']).first()

    if admin and admin.check_password(data['password']):
        access_token = create_access_token(identity=str(admin.id))
        return jsonify({'token': access_token}), 200

    return jsonify({'error': 'Invalid credentials'}), 401

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'error': 'Missing email or password'}), 400

    if Admin.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already registered'}), 400

    admin = Admin(email=data['email'])
    admin.set_password(data['password'])

    db.session.add(admin)
    db.session.commit()

    return jsonify({'message': 'Admin registered successfully'}), 201
