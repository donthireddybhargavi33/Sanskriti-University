import React from 'react';
import { useLocation } from 'react-router-dom';

const ApplicationReceivedPage = () => {
  const location = useLocation();
  const appId = location.state?.applicationId;

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
      <p>Your application has been received successfully.</p>
      {appId && <p className="mt-4 text-gray-600">Application ID: <strong>{appId}</strong></p>}
    </div>
  );
};

export default ApplicationReceivedPage;
