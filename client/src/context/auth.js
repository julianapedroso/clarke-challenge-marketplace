import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
// API
import { api, createSession } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('token');
    if (recoveredUser) {
      setUser(recoveredUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);

    const token = response.data.token;

    api.defaults.headers.Authorization = token;

    localStorage.setItem('token', token);

    setUser(token);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/signin');
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
