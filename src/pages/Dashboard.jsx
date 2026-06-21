// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminProfile from '../AdminComponents/AdminProfile';
import GalleryManager from '../AdminComponents/GalleryManager';
import TeacherManager from '../AdminComponents/TeacherManager';

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

      <button 
        onClick={handleLogout} 
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;