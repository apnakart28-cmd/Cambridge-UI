// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminProfile from '../AdminComponents/AdminProfile';
import GalleryManager from '../AdminComponents/GalleryManager';
import TeacherManager from '../AdminComponents/TeacherManager';
import NewsManager from '../AdminComponents/NewsManager';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Context se logout lein

  const handleLogout = () => {
    logout(); // State se token remove ho jayega
    navigate('/login');
  };

  return (
    <div className="p-8">
        <AdminProfile />
        <GalleryManager />
        <TeacherManager />
        <NewsManager />
    </div>
  );
};

export default Dashboard;