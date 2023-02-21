import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UnauthMiddleware = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('refresh_token')) {
      return navigate('/');
    }
  }, [localStorage.getItem('refresh_token')]);
  return children;
};

export default UnauthMiddleware;
