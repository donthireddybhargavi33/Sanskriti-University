const API_BASE_URL = 'http://localhost:5000/api';

const handleResponse = async (response) => {
    const text = await response.text();
    console.log('Raw response:', text);

    let data;
    try {
        data = JSON.parse(text);
    } catch (e) {
        console.error('Failed to parse response as JSON:', text);
        throw new Error('Invalid response format');
    }

    if (!response.ok) {
        throw new Error(data.error || 'An error occurred');
    }

    return data;
};

// ==================== Admin Authentication ====================

// Admin Login
export const adminLogin = async (credentials) => {
    try {
        console.log('Logging in admin at:', `${API_BASE_URL}/auth/login`);

        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });

        return handleResponse(response);

    } catch (error) {
        console.error('Admin login failed:', error);
        throw error;
    }
};

// Admin Registration
export const adminRegister = async (credentials) => {
    try {
        console.log('Registering admin at:', `${API_BASE_URL}/auth/register`);

        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });

        return handleResponse(response);

    } catch (error) {
        console.error('Admin registration failed:', error);
        throw error;
    }
};

// ==================== Application Submission ====================

export const submitApplication = async (applicationData) => {
    const response = await fetch(`${API_BASE_URL}/applications/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationData)
    });

    return handleResponse(response);
};

export const getApplications = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) throw new Error('No authentication token found');

    const response = await fetch(`${API_BASE_URL}/applications/list`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return handleResponse(response);
};
