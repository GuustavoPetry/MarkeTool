import React, { useState } from 'react';
import { Search, HelpCircle, Phone, FileText, PlayCircle } from 'lucide-react';

interface HelpCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Ajuda: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories: HelpCategory[] = [
    {
      icon: <HelpCircle className="w-16 h-16 text-blue-500" />,
      title: 'Perguntas Frequentes',
      description: 'O que você precisa saber antes de começar.'
    },
    {
      icon: <Phone className="w-16 h-16 text-green-500" />,
      title: 'Planos',
      description: 'Saiba quais são os nossos planos e as formas de pagamentos disponíveis.'
    },
    {
      icon: <FileText className="w-16 h-16 text-blue-600" />,
      title: 'Imposto de Renda',
      description: 'Tudo o que você precisa saber sobre a tributação de seus ativos.'
    },
    {
      icon: <PlayCircle className="w-16 h-16 text-cyan-500" />,
      title: 'Como Funciona',
      description: 'Entenda como funciona a myProfit e comece agora!'
    },
    {
      icon: <Phone className="w-16 h-16 text-green-600" />,
      title: 'Suporte WhatsApp',
      description: 'Esclareça sua dúvida com um de nossos agentes!'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-24">
      {/* Hero Section with Search */}
      <div 
        className="relative h-64 mb-12 rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-6">Central de ajuda</h1>
          <div className="flex items-center max-w-xl w-full mx-auto bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Qual sua dúvida?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-3 text-gray-700 focus:outline-none"
            />
            <button className="px-6 py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Help Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {helpCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center"
          >
            <div className="mb-4">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ajuda;