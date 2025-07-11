// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the admin token exists in local storage
  const token = localStorage.getItem('adminToken');

  if (!token) {
    // If no token is found, redirect the user to the admin login page.
    // The 'replace' prop prevents the user from going back to the protected page.
    return <Navigate to="/admin/login" replace />;
  }

  // If a token is found, render the child component (the protected page).
  return children;
};

export default ProtectedRoute;