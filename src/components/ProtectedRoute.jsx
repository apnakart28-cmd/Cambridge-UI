// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Path apne hisaab se check kar lein

const ProtectedRoute = () => {
  // Context se token get karein
  const { token } = useAuth();

  // Agar memory (state) me token nahi hai toh /login par bhej dein
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Token hai toh protected page dikhayein
  return <Outlet />;
};

export default ProtectedRoute;