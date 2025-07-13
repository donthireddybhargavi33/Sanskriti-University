import os
from datetime import timedelta

class Config:
    # Database configuration - store in a visible location
    SQLALCHEMY_DATABASE_URI = 'sqlite:///D:/Projects/Sankriti University (2)/Sankriti University/university/backend/database/sanskriti.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True  # This will log all database operations
    
    # JWT configuration
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your-secret-key-here')
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    
    # Application configuration
    SECRET_KEY = os.getenv('SECRET_KEY', 'your-secret-key-here')
    CORS_HEADERS = 'Content-Type'
