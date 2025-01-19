import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (token) => {
    onLogin(token);
    const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT
    navigate(decoded.role === 'admin' ? '/admin' : '/user');
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
