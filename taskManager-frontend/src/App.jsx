import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';

const App = () => {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (token) => {
    const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT
    console.log("decoded", decoded);
    setToken(token);
    setUserRole(decoded.role);
  };

  return (
    <Router>
      <Routes>
        {!token ? (
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        ) : userRole === 'admin' ? (
          <>
            <Route path="/admin" element={<AdminDashboard token={token} />} />
            <Route path="*" element={<Navigate to="/admin" />} />
          </>
        ) : (
          <>
            <Route path="/user" element={<UserDashboard token={token} />} />
            <Route path="*" element={<Navigate to="/user" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
