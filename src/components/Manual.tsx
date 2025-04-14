import React from 'react';
import { Plus } from 'lucide-react';

interface ManualProps {
  onAddAsset?: () => void;
}

const Manual: React.FC<ManualProps> = ({ onAddAsset }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-36">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Lançamentos Manuais</h1>
        <p className="text-gray-600">
          Aqui poderá fazer lançamentos e ajustes de ativos em bolsa, conta corrente, renda fixa e criptomoedas
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={onAddAsset}
          className="flex items-center px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          INCLUIR ATIVO
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-2 bg-emerald-400 text-white font-medium">
          <div className="p-4">Ativo</div>
          <div className="p-4">Categoria</div>
        </div>

        {/* Empty state message */}
        <div className="p-8 text-center text-gray-500">
          Nenhum lançamento manual registrado
        </div>
      </div>
    </div>
  );
};

export default Manual;