import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
// API
import { api, createSession, createClient } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('token');
    if (recoveredUser) {
      setUser(recoveredUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await createSession(email, password);
      const token = response.data.token;

      api.defaults.headers.Authorization = token;
      localStorage.setItem('token', token);

      setUser(token);
      navigate('/');
    } catch (error) {
      alert(
        'E-mail ou senha incorretos. Verifique os campos e tente novamente.'
      );
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await createClient(name, email, password);

      setClient(response.data.client._id);
      alert('Cadastro realizado com sucesso!');
      navigate('/signin');
    } catch (error) {
      alert('Necessário preenchimento de todos os campos. Tente novamente.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/signin');
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
        register,
        client,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
