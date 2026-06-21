// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Context create karein
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Token ko sirf React state me rakhenge, kisi storage me nahi
  const [token, setToken] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook banayein taki kisi bhi component me easily use kar sakein
export const useAuth = () => useContext(AuthContext);