import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface FinancialData {
  ativo: string;
  percentDiario: string;
  valorDiario: string;
  percentTotal: string;
  valorTotal: string;
}

interface TableProps {
  data: FinancialData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-emerald-400 text-white">
            <th className="p-3 text-left font-medium">
              <div className="flex items-center gap-1">
                Ativo
                <ArrowUpDown size={14} />
              </div>
            </th>
            <th className="p-3 text-right font-medium">
              <div className="flex items-center justify-end gap-1">
                % Diário
                <ArrowUpDown size={14} />
              </div>
            </th>
            <th className="p-3 text-right font-medium">
              <div className="flex items-center justify-end gap-1">
                R$ Diário
                <ArrowUpDown size={14} />
              </div>
            </th>
            <th className="p-3 text-right font-medium">
              <div className="flex items-center justify-end gap-1">
                % Total
                <ArrowUpDown size={14} />
              </div>
            </th>
            <th className="p-3 text-right font-medium">
              <div className="flex items-center justify-end gap-1">
                R$ Total
                <ArrowUpDown size={14} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.ativo}
              className={`
                border-b border-gray-100
                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              `}
            >
              <td className="p-3 text-blue-600 hover:underline cursor-pointer">
                {row.ativo}
              </td>
              <td className="p-3 text-right">{row.percentDiario}</td>
              <td className="p-3 text-right">{row.valorDiario}</td>
              <td className="p-3 text-right">
                <span className={row.percentTotal.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                  {row.percentTotal}
                </span>
              </td>
              <td className="p-3 text-right">
                <span className={row.valorTotal.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                  {row.valorTotal}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-gray-200 font-medium">
            <td className="p-3">Total:</td>
            <td className="p-3 text-right">0,00%</td>
            <td className="p-3 text-right">R$ 0,00</td>
            <td className="p-3 text-right text-green-500">5,51%</td>
            <td className="p-3 text-right text-green-500">R$ 433,57</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;