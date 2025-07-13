// Base URL for API calls
const API_BASE_URL = '/api';

// Helper function to handle API responses
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

// Application Submission
export const submitApplication = async (applicationData) => {
    try {
        console.log('Submitting application to:', `${API_BASE_URL}/applications/submit`);
        console.log('Application data:', applicationData);

        const response = await fetch(`${API_BASE_URL}/applications/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData)
        });

        return handleResponse(response);
    } catch (error) {
        console.error('Error submitting application:', error);
        throw error;
    }
};

// Get Applications (Admin)
export const getApplications = async () => {
    try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            throw new Error('No authentication token found');
        }

        logApiCall('GET', '/applications/list');
        
        const response = await fetch(`${API_BASE_URL}/applications/list`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch applications');
        }

        const data = await response.json();
        console.log('Received applications:', data);
        return data;
    } catch (error) {
        console.error('Error fetching applications:', error);
        throw error;
    }
};
