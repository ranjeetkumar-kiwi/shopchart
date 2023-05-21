import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { routes } from '../constant/stirng';

const ProtectedRoutes = () => {
  const login = "";
  // if login then move to dashboard otherwise redirect to login page
  return login ? <Outlet /> : <Navigate to={routes.Login} replace={true} />;
};

export default ProtectedRoutes;
