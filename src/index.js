import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// --- MOCK BACKEND API ---
let applicationsDB = [];
// MODIFIED: Added mock user database
let userDB = {
  email: 'admin@sanskriti.co',
  password: 'admin@123',
  resetToken: null,
  resetTokenExpiry: null,
};
const originalFetch = window.fetch;

window.fetch = (url, options) => {
  console.log('Mock Fetch Intercepted:', url, options);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // ... (Submit Application endpoint is the same)
      // Inside the window.fetch mock in src/index.js

// --- ENDPOINT 1: SUBMIT APPLICATION ---
if (url === '/api/applications' && options.method === 'POST') {
  try {
    const newApplication = { ...JSON.parse(options.body), id: Date.now(), submittedAt: new Date().toISOString() };
    applicationsDB.push(newApplication);
    console.log('Updated DB:', applicationsDB);
    
    // MODIFIED: Return the newly created application object with its ID
    resolve(new Response(JSON.stringify(newApplication), { status: 200 })); 
  } catch (e) {
    resolve(new Response(JSON.stringify({ message: 'Bad request body' }), { status: 400 }));
  }
  return;
}

      // --- ADMIN LOGIN ENDPOINT (Uses userDB now) ---
      if (url === '/api/admin/login' && options.method === 'POST') {
        const { email, password } = JSON.parse(options.body);
        if (email === userDB.email && password === userDB.password) {
          resolve(new Response(JSON.stringify({ token: 'fake-jwt-token-for-admin' }), { status: 200 }));
        } else {
          resolve(new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 }));
        }
        return;
      }
      
      // --- NEW: FORGOT PASSWORD ENDPOINT ---
      if (url === '/api/admin/forgot-password' && options.method === 'POST') {
        const { email } = JSON.parse(options.body);
        if (email === userDB.email) {
          // Generate a fake token and expiry
          userDB.resetToken = 'mock-reset-token-12345';
          userDB.resetTokenExpiry = Date.now() + 3600000; // 1 hour
          console.log(`%c[MOCK EMAIL] Password reset requested for ${email}. Token: ${userDB.resetToken}`, 'color: lightblue; font-size: 14px;');
          console.log(`%c[MOCK EMAIL] Reset link: http://localhost:3000/admin/reset-password/${userDB.resetToken}`, 'color: lightblue; font-size: 14px;');
          resolve(new Response(JSON.stringify({ message: 'If an account with this email exists, a reset link has been sent.' }), { status: 200 }));
        } else {
          // Always return a generic success message for security
          resolve(new Response(JSON.stringify({ message: 'If an account with this email exists, a reset link has been sent.' }), { status: 200 }));
        }
        return;
      }

      // --- NEW: RESET PASSWORD ENDPOINT ---
      if (url === '/api/admin/reset-password' && options.method === 'POST') {
        const { token, newPassword } = JSON.parse(options.body);
        if (token === userDB.resetToken && userDB.resetTokenExpiry > Date.now()) {
          // Token is valid and not expired
          userDB.password = newPassword;
          userDB.resetToken = null; // Invalidate the token
          userDB.resetTokenExpiry = null;
          console.log(`%c[MOCK DB] Password for ${userDB.email} has been updated to: ${newPassword}`, 'color: lightgreen; font-size: 14px;');
          resolve(new Response(JSON.stringify({ message: 'Password has been reset successfully!' }), { status: 200 }));
        } else {
          resolve(new Response(JSON.stringify({ message: 'Invalid or expired reset token.' }), { status: 400 }));
        }
        return;
      }

      // ... (Get Applications endpoint is the same)
      if (url === '/api/applications' && options.method === 'GET') {
          if (options.headers.Authorization === 'Bearer fake-jwt-token-for-admin') {
            resolve(new Response(JSON.stringify(applicationsDB), { status: 200 }));
          } else {
            resolve(new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 403 }));
          }
          return;
      }

      resolve(originalFetch(url, options));
    }, 500);
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode> <App /> </React.StrictMode> );