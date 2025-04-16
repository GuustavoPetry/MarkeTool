import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface PatrimonioData {
  ativo: string;
  valorAtual: string;
  percentual: string;
}

const patrimonioData: PatrimonioData[] = [
  { ativo: 'BTZS11', valorAtual: '-', percentual: '9.15%' },
  { ativo: 'GGRC11', valorAtual: '-', percentual: '9.05%' },
  { ativo: 'VGHF11', valorAtual: '-', percentual: '8.64%' },
  { ativo: 'GASB14', valorAtual: '-', percentual: '8.48%' },
  { ativo: 'SREV11', valorAtual: '-', percentual: '8.45%' },
  { ativo: 'HSLG11', valorAtual: '-', percentual: '8.28%' },
  { ativo: 'XPLG11', valorAtual: '-', percentual: '8.30%' },
  { ativo: 'HGLG11', valorAtual: '-', percentual: '8.14%' },
  { ativo: 'XPML11', valorAtual: '-', percentual: '5.10%' },
  { ativo: 'CXRI04', valorAtual: '-', percentual: '3.16%' },
];

const chartData = patrimonioData.map((item) => ({
  name: item.ativo,
  value: parseFloat(item.percentual.replace('%', '')),
}));

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2',
  '#D65DB1', '#FF6F91', '#FFC75F', '#F9F871', '#2C73D2',
];

function Patrimonio() {
  const [selectedDate, setSelectedDate] = useState('Abril/2025');

  return (
    <div className="max-w-7xl mx-auto p-6 pt-24">
      <h1 className="text-2xl font-bold text-center mb-8">
        Patrimônio em {selectedDate}
      </h1>

      <div className="mb-6">
        <div className="flex items-center gap-4 justify-center">
          <input
            type="text"
            placeholder="Abril/2025"
            className="px-4 py-2 border rounded-lg w-64"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Search size={20} />
            Agrupar
          </button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Filter size={20} />
            Filtrar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Donut Chart */}
        <div className="bg-white rounded-lg shadow p-6 flex justify-center">
          <PieChart width={400} height={400}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ativo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Atual
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patrimonioData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.ativo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.valorAtual}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.percentual}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-semibold">
                <td className="px-6 py-4 whitespace-nowrap text-sm">Total:</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">100.00%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Patrimonio;