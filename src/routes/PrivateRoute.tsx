// src/routes/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';

type PrivateRouteProps = {
  element: JSX.Element;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isDarkMode, setIsDarkMode }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} userName="Visitante" />
      {element}
      <Footer isDarkMode={isDarkMode} />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
