import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role, userRole }) => {
  if (role !== userRole) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
