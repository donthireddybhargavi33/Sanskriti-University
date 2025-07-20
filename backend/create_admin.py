from app import create_app
from models import Admin
from extension import db

def create_admin_user():
    app = create_app()
    with app.app_context():
        # Check if admin already exists
        admin = Admin.query.filter_by(email='admin@sanskriti.co').first()
        if admin is None:
            admin = Admin(email='admin@sanskriti.co')
            admin.set_password('admin@123')
            db.session.add(admin)
            db.session.commit()
            print('Admin user created successfully!')
        else:
            print('Admin user already exists!')

if __name__ == '__main__':
    create_admin_user()
