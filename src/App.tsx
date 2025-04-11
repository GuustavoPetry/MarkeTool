import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Patrimonio from './components/Patrimonio.tsx';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

        {/* Navigation Bar */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} userName="Gustavo" />

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patrimonio" element={<Patrimonio />} />
          </Routes>
        </div>

        <Footer isDarkMode={isDarkMode} />

      </div>
    </Router>
  );
}

export default App;