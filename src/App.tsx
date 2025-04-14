import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.tsx';
import Home from './components/Home.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Notas from './components/Notas.tsx';
import Patrimonio from './components/Patrimonio.tsx';
import Manual from './components/Manual.tsx';
import Ajuda from './components/Ajuda.tsx';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validCredentials = {
    cpf: 'visitante',
    senha: '123',
  };

  const handleLogin = (cpf: string, senha: string): boolean => {
    if (cpf === validCredentials.cpf && senha === validCredentials.senha) {
      setIsAuthenticated(true);
      return true; // ✅ agora retorna boolean!
    } else {
      alert('Login ou Senha inválidos!!!');
      return false;
    }
  };

  const PrivateRoute = ({ element }: { element: JSX.Element }) => {
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

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className=''>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route path="/patrimonio" element={<PrivateRoute element={<Patrimonio />} />} />
            <Route path="/notas" element={<PrivateRoute element={<Notas />} />} />
            <Route path="/manual" element={<PrivateRoute element={<Manual />} />} />
            <Route path="/ajuda" element={<PrivateRoute element={<Ajuda />} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
