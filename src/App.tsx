import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Notas from './components/Notas.tsx';
import Patrimonio from './components/Patrimonio.tsx';
import Manual from './components/manual.tsx'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} userName="Gustavo" />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patrimonio" element={<Patrimonio />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/manual" element={<Manual />} />
          </Routes>
        </div>

        <Footer isDarkMode={isDarkMode} />

      </div>
    </Router>
  );
}

export default App;