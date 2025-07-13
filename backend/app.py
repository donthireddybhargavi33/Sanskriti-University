from flask import Flask
from config import Config
from extension import db, jwt, cors
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize CORS with frontend origins
    CORS(app, resources={
        r"/api/*": {
            "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    })

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)

    # Register blueprints
    from routes.auth import auth_bp
    from routes.applications import applications_bp

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(applications_bp, url_prefix='/api/applications')

    # Create database tables and initialize admin
    with app.app_context():
        db.create_all()
        
        # Create admin user if it doesn't exist
        from models import Admin
        admin_email = "admin@sanskriti.edu"
        if not Admin.query.filter_by(email=admin_email).first():
            admin = Admin(email=admin_email)
            admin.set_password("admin123")  # Default password, change in production
            db.session.add(admin)
            db.session.commit()
            print(f"Created admin user: {admin_email}")

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
