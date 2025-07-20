import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ApplicationReceivedPage = () => {
  const location = useLocation();
  const appId = location.state?.applicationId;

  return (
    <div style={{backgroundColor:'white'}} className="p-8 text-center">
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
        marginBottom: '40px',
      }}>
        Home
      </Link><br></br>
      <div style={{ maxWidth: '350px', marginLeft: '250px', padding: '50px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
      <p>Your application has been received successfully.</p>
      {appId && <p className="mt-4 text-gray-600">Application ID: <strong>{appId}</strong></p>}
      </div>
    </div>
  );
};

export default ApplicationReceivedPage;
