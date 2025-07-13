// Base URL for API calls - using relative path for proxy
const API_BASE_URL = '/api';

// Debug function to log all API calls
const logApiCall = (method, endpoint, body = null) => {
    console.log(`API Call: ${method} ${endpoint}`);
    if (body) console.log('Request Body:', body);
};

// Admin Authentication
export const adminLogin = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
    }
    
    return response.json();
};

// Application Submission
export const submitApplication = async (applicationData) => {
    const response = await fetch(`${API_BASE_URL}/applications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Application submission failed');
    }
    
    return response.json();
};

// Get Applications (Admin only)
export const getApplications = async (token) => {
    const response = await fetch(`${API_BASE_URL}/applications`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch applications');
    }
    
    return response.json();
};

// Update Application Status (Admin only)
export const updateApplicationStatus = async (applicationId, status, token) => {
    const response = await fetch(`${API_BASE_URL}/applications/${applicationId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update application status');
    }
    
    return response.json();
};
