import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../components/Login';
import Home from '../components/Home';
import Notas from '../components/Notas';
import Patrimonio from '../components/Patrimonio';
import Manual from '../components/Manual';
import Ajuda from '../components/Ajuda';

function AppRoutes() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    return (
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route path="/patrimonio" element={<PrivateRoute element={<Patrimonio />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route path="/notas" element={<PrivateRoute element={<Notas />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route path="/manual" element={<PrivateRoute element={<Manual />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route path="/ajuda" element={<PrivateRoute element={<Ajuda />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        </Routes>
      </div>
    );
  }

export default AppRoutes;