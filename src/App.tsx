import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute.tsx';
import Login from './components/Login.tsx';
import Home from './components/Home.tsx';
// import Navbar from './components/Navbar.tsx';
// import Footer from './components/Footer.tsx';
import Notas from './components/Notas.tsx';
import Patrimonio from './components/Patrimonio.tsx';
import Manual from './components/Manual.tsx';
import Ajuda from './components/Ajuda.tsx';

import { AuthProvider } from './contexts/AuthContext'; // Importa o contexto

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

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
