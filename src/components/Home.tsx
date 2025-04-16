import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from './table';
import {
    PieChart,
    FileText,
    Users,
    HelpCircle,
    RefreshCw
  } from 'lucide-react';

const mockData = [
  {
    ativo: 'ABCB4',
    percentDiario: '0,00%',
    valorDiario: 'R$ 0,00',
    percentTotal: '17,61%',
    valorTotal: 'R$ 289,97'
  },
  {
    ativo: 'B5P211',
    percentDiario: '0,00%',
    valorDiario: 'R$ 0,00',
    percentTotal: '0,54%',
    valorTotal: 'R$ 0,51'
  },
  {
    ativo: 'BBAS3',
    percentDiario: '0,00%',
    valorDiario: 'R$ 0,00',
    percentTotal: '3,79%',
    valorTotal: 'R$ 36,47'
  },
  {
    ativo: 'BBDC4',
    percentDiario: '0,00%',
    valorDiario: 'R$ 0,00',
    percentTotal: '11,44%',
    valorTotal: 'R$ 68,01'
  },
  {
    ativo: 'CMIG4',
    percentDiario: '0,00%',
    valorDiario: 'R$ 0,00',
    percentTotal: '0,82%',
    valorTotal: 'R$ 12,72'
  },

  {
    ativo: 'EGIE3',
    percentDiario: '0,00%',
    valorDiario: 'R$ 0,00',
    percentTotal: '9,02%',
    valorTotal: 'R$ 72,06'
  },
  {
    ativo: 'FLRY3',
    percentDiario: '0,00%',
    valorDiario: 'R$ 0,00',
    percentTotal: '1,84%',
    valorTotal: 'R$ 19,50'
  },
];

function Home() {
    const [isDarkMode] = useState(false);
    const [userName] = useState('Visitante');
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

      { icon: Users, 
        title: 'Lançamentos Manuais', 
        desc: 'Adicionar registros',
        onClick: () => navigate('/manual')
      },

      { icon: HelpCircle, 
        title: 'Dúvidas comuns', 
        desc: 'Central de ajuda',
        onClick: () => navigate('/ajuda')
      },
    ];
  
    return (



      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">

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
            <Table data={mockData} />
          </div>
        </div>
      </div>

    );
  }

export default Home;
  