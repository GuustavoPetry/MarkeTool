import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/index.tsx';


import { AuthProvider } from './contexts/AuthContext'; // Importa o contexto


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
