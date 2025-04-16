import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.tsx';

interface LoginProps {
  onForgotAccount?: () => void;
  onCreateAccount?: () => void;
}

const Login: React.FC<LoginProps> = ({ onForgotAccount, onCreateAccount }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(cpf, senha);
    if (success) {
      navigate('/home');
    } else {
      alert('CPF ou senha incorretos!');
    }
  };

  return (
    <div className="min-h-screen bg-[#06051B] flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <button className="flex items-center text-white hover:text-gray-300 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Voltar para home</span>
        </button>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-[#FF4D0D] text-white rounded-full hover:bg-[#ff3c00] transition-colors">
            Abra sua conta
          </button>
          <button className="px-6 py-2 border border-white text-white rounded-full flex items-center hover:bg-white/10 transition-colors">
            <HelpCircle className="w-5 h-5 mr-2" />
            Ajuda
          </button>
        </div>
      </header>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-8">
            <DollarSign className="w-12 h-12 text-[#FF4D0D]" />
          </div>

          <h1 className="text-2xl font-bold text-center mb-8">Bem-vindo ao <br /> MarkeTool!</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D0D]"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D0D]"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={onForgotAccount}
                className="text-[#FF4D0D] hover:text-[#ff3c00] transition-colors flex items-center"
              >
                Esqueci minha conta
                <ArrowLeft className="w-4 h-4 ml-1 transform rotate-180" />
              </button>

              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Lembrar dados</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4D0D]"></div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors mb-4"
            >
              Confirmar e Entrar
            </button>

            <button
              type="button"
              className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Bloquear acessos
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={onCreateAccount}
              className="text-gray-700 hover:text-[#FF4D0D] transition-colors flex items-center justify-center"
            >
              Ainda não sou cliente
              <ArrowLeft className="w-4 h-4 ml-1 transform rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
