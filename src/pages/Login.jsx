// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginApi } from '../api/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Context se login function lein
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginApi(email, password);
      login(response.token);
      navigate('/dashboard');

    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    // Background ko pura screen height diya aur soft gray color add kiya
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      
      {/* Form card ko modern shadow, rounded corners aur responsive width di gayi hai */}
      <form 
        onSubmit={handleLogin} 
        className="bg-white p-8 sm:p-10 shadow-xl rounded-2xl w-full max-w-md border border-gray-100"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Admin Login</h2>
          <p className="text-sm text-gray-500">Please sign in to access the dashboard</p>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required 
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;