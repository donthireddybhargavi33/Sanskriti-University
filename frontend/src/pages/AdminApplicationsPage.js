import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getApplications } from '../services/api';

const PageContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
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
    background-color: #0a183d;
  }

  tr:nth-child(even) {
    background-color: #071029;
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

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          navigate('/admin/login');
          return;
        }
        
        const data = await getApplications(token);
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

  return (
    <PageContainer>
      <Header>
        <h2>Submitted Applications ({applications.length})</h2>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      
      {applications.length > 0 ? (
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
              <th>Status</th>
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
                <td>{new Date(app.submittedAt).toLocaleString()}</td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoApplicationsMessage>There are no applications yet.</NoApplicationsMessage>
      )}
    </PageContainer>
  );
};

export default AdminApplicationsPage;
