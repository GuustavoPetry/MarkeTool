import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PieChart,
    FileText,
    Users,
    HelpCircle,
    RefreshCw
  } from 'lucide-react';

function Home() {
    const [isDarkMode] = useState(false);
    const [userName] = useState('Gustavo');
    const navigate = useNavigate();
  
    const cards = [
      { icon: FileText, 
        title: 'Enviar notas', 
        desc: 'Gerenciar documentos',
        onClick: () => navigate('/notas')
      },

      {
        icon: PieChart,
        title: 'Meu patrimônio',
        desc: 'Visualizar ativos',
        onClick: () => navigate('/patrimonio')
      },
      { icon: Users, title: 'Lançamentos Manuais', desc: 'Adicionar registros' },
      { icon: HelpCircle, title: 'Dúvidas comuns', desc: 'Central de ajuda' },
    ];
  
    return (



      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Welcome Message */}
        <div className={`mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <h1 className="text-3xl font-bold">Olá, {userName}!</h1>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Bem-vindo ao seu painel de controle. Acompanhe suas métricas e resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className={`p-6 rounded-xl cursor-pointer ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              } shadow-md transition-all`}
            >
              <item.icon className={`h-8 w-8 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
              <h3 className={`mt-4 text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Data Table */}
        <div className={`rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md overflow-hidden`}>
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Resumo de Ativos
            </h2>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                AGRUPAR
              </button>
              <button className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                FILTRAR
              </button>
              <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <RefreshCw className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Ativo</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>% Diário</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>R$ Diário</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>% Total</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>R$ Total</th>
                </tr>
              </thead>
              <tbody className={`${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                    Nenhum resultado encontrado
                  </td>
                </tr>
              </tbody>
              <tfoot className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <tr>
                  <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Total:</td>
                  <td className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>0%</td>
                  <td className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>R$ 0,00</td>
                  <td className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>0%</td>
                  <td className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>R$ 0,00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

    );
  }

export default Home;
  