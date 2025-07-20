
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getApplications } from '../services/api';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 20px 10px;
    max-width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  background: #ff4d4d;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #2a3f7a;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #78797bff;
  }

  tr:nth-child(even) {
    background-color: #9b9ca1ff;
  }
`;

const NoApplicationsMessage = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 18px;
  padding: 50px;
`;

const AdminApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          navigate('/admin/login');
          return;
        }
        
        const data = await getApplications();
        setApplications(data);
      } catch (error) {
        console.error("Error:", error);
        if (error.message.includes('401')) {
          navigate('/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return <PageContainer><h2>Loading Applications...</h2></PageContainer>;
  }

  const handleClearApplications = async () => {
    if (!window.confirm('Are you sure you want to clear all application data? This action cannot be undone.')) {
      return;
    }
    setClearing(true);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }
      const response = await fetch('http://localhost:5000/api/applications/clear', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to clear applications');
      }
      alert('All application data cleared successfully.');
      // Refresh the applications list
      const data = await getApplications();
      setApplications(data);
    } catch (error) {
      console.error('Error clearing applications:', error);
      alert('Error clearing applications: ' + error.message);
    } finally {
      setClearing(false);
    }
  };

  return (
    <PageContainer style={{backgroundColor: '#ffffffff' }}>
              <Link to="/" style={{
                 position: 'absolute',
                display: 'flex',
                padding: '10px 2px',
                backgroundColor: '#f7b500',
                color: '#0a183d',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
              }}>
                Home
              </Link><br></br>
      <Header>
        <h2>Submitted Applications ({applications.length})</h2>
        <div>
          <LogoutButton onClick={handleLogout} style={{marginRight: '10px'}}>Logout</LogoutButton>
          <LogoutButton onClick={handleClearApplications} disabled={clearing} style={{backgroundColor: '#007bff'}}>
            {clearing ? 'Clearing...' : 'Clear All Data'}
          </LogoutButton>
        </div>
      </Header>
      
      {applications.length > 0 ? (
        <div style={{ overflowX: 'auto' }}>
          <Table>
            <thead>
              <tr>
                <th>App ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>State</th>
                <th>City</th>
                <th>Submitted At</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.id}</td>
                  <td>{app.fullName}</td>
                  <td>{app.email}</td>
                  <td>{app.mobile}</td>
                  <td>{app.state}</td>
                  <td>{app.city}</td>
                  <td>{new Date(app.submitted_at).toLocaleString()}</td>
                  <td>{app.message}</td>
                  <td>
                    <LogoutButton
                      onClick={async () => {
                        if (!window.confirm(`Are you sure you want to delete application ID ${app.id}? This action cannot be undone.`)) {
                          return;
                        }
                        try {
                          const token = localStorage.getItem('adminToken');
                          if (!token) {
                            navigate('/admin/login');
                            return;
                          }
                          const response = await fetch(`http://localhost:5000/api/applications/${app.id}`, {
                            method: 'DELETE',
                            headers: {
                              'Authorization': `Bearer ${token}`,
                              'Accept': 'application/json'
                            }
                          });
                          if (!response.ok) {
                            const errorData = await response.json();
                            throw new Error(errorData.error || 'Failed to delete application');
                          }
                          alert(`Application ID ${app.id} deleted successfully.`);
                          // Refresh the applications list
                          const data = await getApplications();
                          setApplications(data);
                        } catch (error) {
                          console.error('Error deleting application:', error);
                          alert('Error deleting application: ' + error.message);
                        }
                      }}
                      style={{ backgroundColor: '#dc3545', marginLeft: '10px' }}
                    >
                      Delete
                    </LogoutButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <NoApplicationsMessage>There are no applications yet.</NoApplicationsMessage>
      )}
    </PageContainer>
  );
};

export default AdminApplicationsPage;