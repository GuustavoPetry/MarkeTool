import React, { useState } from 'react';
import { FileUp, File as FilePdf, FolderArchive } from 'lucide-react';

interface NotasProps {
  onFileUpload?: (files: FileList) => void;
}

const Notas: React.FC<NotasProps> = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (onFileUpload && files.length > 0) {
      onFileUpload(files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (onFileUpload && files && files.length > 0) {
      onFileUpload(files);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Arquivo/Corretora:</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <FilePdf className="w-5 h-5 text-red-500 mr-2" />
          <span>PDF: Você pode enviar uma ou mais notas de corretagem de uma vez em PDF</span>
        </div>

        <div className="flex items-center text-gray-600">
          <FolderArchive className="w-5 h-5 text-yellow-600 mr-2" />
          <span>ZIP: Ou também pode carregar um ZIP contendo todas suas notas compactadas</span>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4">
            <FileUp className="w-12 h-12 text-gray-400" />
            <p className="text-gray-600">
              Clique aqui ou arraste os arquivos para enviar
            </p>
            <label className="relative">
              <button
                className="px-6 py-2 bg-cyan-400 text-white rounded hover:bg-cyan-500 transition-colors"
                onClick={() => document.getElementById('fileInput')?.click()}
              >
                Enviar notas
              </button>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                multiple
                accept=".pdf,.zip"
                onChange={handleFileSelect}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notas;