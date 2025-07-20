import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { adminLogin } from '../services/api';  // ✅ Use centralized API call
import { Link } from 'react-router-dom';
// --- STYLES ---
const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  gap: 40px;
  background-color: white;
`;



const LoginForm = styled.form`
  width: 90%;
  max-width: 400px;
  padding: 40px;
  color: white;
  background: #0a183d;
  border: 1px solid #2a3f7a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #2a3f7a;
  background-color: #071029;
  color: white;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #f7b500;
  color: #0a183d;
  font-weight: bold;
  border: none;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const ErrorText = styled.p`
  color: #ff4d4d;
  text-align: center;
  margin: 0;
`;

const AdminLoginPage = ({ setAdminLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await adminLogin({ email, password });  // ✅ Centralized API call
      localStorage.setItem('adminToken', data.token);
      setAdminLoggedIn(true);
      navigate('/admin/applications');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
      <>
      <Link to="/" style={{
        position: 'absolute',
        top: 125,
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
    <LoginPageContainer style={{backgroundColor: 'white'}}>

      <LoginForm onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <ErrorText>{error}</ErrorText>}
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginPageContainer>
    </>
  );
};

export default AdminLoginPage;