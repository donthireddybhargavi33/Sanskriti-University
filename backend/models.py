from extension import db
from datetime import datetime
import bcrypt
import logging

logger = logging.getLogger(__name__)

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def set_password(self, password):
        self.password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password_hash.encode('utf-8'))

class Application(db.Model):
    __tablename__ = 'applications'
    
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    mobile = db.Column(db.String(15), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    course = db.Column(db.String(100))
    message = db.Column(db.Text)
    submitted_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    status = db.Column(db.String(20), nullable=False, default='pending')

    def __init__(self, **kwargs):
        super(Application, self).__init__(**kwargs)
        logger.info(f"Creating new application with data: {kwargs}")

    def __repr__(self):
        return f'<Application {self.full_name}>'

    def to_dict(self):
        return {
            'id': self.id,
            'full_name': self.full_name,
            'email': self.email,
            'mobile': self.mobile,
            'state': self.state,
            'city': self.city,
            'course': self.course,
            'message': self.message,
            'status': self.status,
            'submitted_at': self.submitted_at.isoformat() if self.submitted_at else None
        }
