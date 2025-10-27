"use client";
import React, { useState } from "react";
import {
  Shield,
  Users,
  AlertTriangle,
  MapPin,
  TrendingUp,
  Eye,
  ArrowUp,
  ArrowDown,
  Calendar,
  CheckCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("mes");

  // Dados de casos ao longo do tempo
  const casosTemporais = [
    { mes: "Jan", casos: 12, prevenidos: 8 },
    { mes: "Fev", casos: 15, prevenidos: 11 },
    { mes: "Mar", casos: 18, prevenidos: 14 },
    { mes: "Abr", casos: 14, prevenidos: 10 },
    { mes: "Mai", casos: 22, prevenidos: 17 },
    { mes: "Jun", casos: 19, prevenidos: 15 },
  ];

  // Distribuição por zonas
  const zonasDados = [
    { zona: "Maputo", casos: 45, vulneraveis: 120 },
    { zona: "Matola", casos: 32, vulneraveis: 95 },
    { zona: "Beira", casos: 28, vulneraveis: 78 },
    { zona: "Nampula", casos: 35, vulneraveis: 102 },
    { zona: "Tete", casos: 18, vulneraveis: 56 },
  ];

  // Distribuição por tipo de tráfico
  const tipoTrafico = [
    { tipo: "Trabalho Forçado", valor: 42, cor: "#6366f1" },
    { tipo: "Exploração Sexual", valor: 28, cor: "#ec4899" },
    { tipo: "Mendicidade", valor: 15, cor: "#f59e0b" },
    { tipo: "Outros", valor: 15, cor: "#8b5cf6" },
  ];

  // Estatísticas de faixa etária
  const faixaEtaria = [
    { faixa: "0-17", total: 35 },
    { faixa: "18-25", total: 48 },
    { faixa: "26-35", total: 32 },
    { faixa: "36-45", total: 18 },
    { faixa: "46+", total: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-indigo-600 p-3 rounded-lg shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard SafeNet
              </h1>
              <p className="text-gray-600">
                Estatísticas e Monitoramento em Tempo Real
              </p>
            </div>
          </div>

          {/* Filtro de Período */}
          <div className="flex items-center space-x-2 mt-4">
            <Calendar className="w-5 h-5 text-gray-600" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="semana">Última Semana</option>
              <option value="mes">Último Mês</option>
              <option value="trimestre">Último Trimestre</option>
              <option value="ano">Último Ano</option>
            </select>
          </div>
        </div>

        {/* Cards de Estatísticas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total de Casos */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex items-center text-red-600 text-sm font-semibold">
                <ArrowUp className="w-4 h-4" />
                <span>+12%</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Casos Identificados
            </h3>
            <p className="text-3xl font-bold text-gray-900">158</p>
            <p className="text-xs text-gray-500 mt-2">Últimos 6 meses</p>
          </div>

          {/* Casos Prevenidos */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center text-green-600 text-sm font-semibold">
                <ArrowUp className="w-4 h-4" />
                <span>+18%</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Casos Prevenidos
            </h3>
            <p className="text-3xl font-bold text-gray-900">1,247</p>
            <p className="text-xs text-gray-500 mt-2">
              Intervenções bem-sucedidas
            </p>
          </div>

          {/* Pessoas Vulneráveis */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex items-center text-yellow-600 text-sm font-semibold">
                <ArrowDown className="w-4 h-4" />
                <span>-8%</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Pessoas Vulneráveis
            </h3>
            <p className="text-3xl font-bold text-gray-900">451</p>
            <p className="text-xs text-gray-500 mt-2">
              Identificadas e monitoradas
            </p>
          </div>

          {/* Links Verificados */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex items-center text-indigo-600 text-sm font-semibold">
                <ArrowUp className="w-4 h-4" />
                <span>+24%</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Links Verificados
            </h3>
            <p className="text-3xl font-bold text-gray-900">5,892</p>
            <p className="text-xs text-gray-500 mt-2">Este mês</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Evolução Temporal */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" />
              Evolução de Casos
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={casosTemporais}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="mes" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="casos"
                  stroke="#ef4444"
                  strokeWidth={3}
                  name="Casos Identificados"
                  dot={{ fill: "#ef4444", r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="prevenidos"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Casos Prevenidos"
                  dot={{ fill: "#10b981", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Tipos de Tráfico */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Tipos de Tráfico
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tipoTrafico}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ tipo, valor }) => `${tipo}: ${valor}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {tipoTrafico.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribuição por Zonas e Faixa Etária */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Zonas de Risco */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-red-600" />
              Distribuição por Zonas
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={zonasDados}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="zona" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="casos"
                  fill="#ef4444"
                  name="Casos"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="vulneraveis"
                  fill="#f59e0b"
                  name="Vulneráveis"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Faixa Etária */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Distribuição por Faixa Etária
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={faixaEtaria} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="faixa" type="category" stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="total" fill="#6366f1" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lista de Zonas com Detalhes */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
            Detalhes por Zona
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                    Zona
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                    Casos
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                    Vulneráveis
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                    Nível de Risco
                  </th>
                </tr>
              </thead>
              <tbody>
                {zonasDados.map((zona, index) => {
                  const risco =
                    zona.casos > 35
                      ? "Alto"
                      : zona.casos > 25
                      ? "Médio"
                      : "Baixo";
                  const riscoColor =
                    risco === "Alto"
                      ? "bg-red-100 text-red-700"
                      : risco === "Médio"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700";

                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {zona.zona}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{zona.casos}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {zona.vulneraveis}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${riscoColor}`}
                        >
                          {risco}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alertas e Notificações */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Alerta de Segurança
              </h4>
              <p className="text-gray-700 mb-3">
                Aumento de 23% em ofertas suspeitas de emprego nas redes sociais
                nas últimas 2 semanas. Reforce a vigilância e educação nas
                comunidades de Maputo e Matola.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium shadow-md hover:shadow-lg">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>

        {/* Ações Recentes */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Ações Recentes
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="bg-green-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  Operação de resgate bem-sucedida em Matola
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  12 pessoas resgatadas de situação de trabalho forçado - Há 2
                  horas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  Link suspeito bloqueado
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Oferta falsa de emprego na África do Sul identificada - Há 5
                  horas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  Campanha de sensibilização em Nampula
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  350 pessoas alcançadas com informação sobre prevenção - Ontem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// "use client";
// import React, { useState } from "react";
// import {
//   Shield,
//   Users,
//   AlertTriangle,
//   MapPin,
//   TrendingUp,
//   Eye,
//   ArrowUp,
//   ArrowDown,
//   Calendar,
//   CheckCircle,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const Dashboard = () => {
//   const [selectedPeriod, setSelectedPeriod] = useState("mes");

//   // Dados de casos ao longo do tempo
//   const casosTemporais = [
//     { mes: "Jan", casos: 12, prevenidos: 8 },
//     { mes: "Fev", casos: 15, prevenidos: 11 },
//     { mes: "Mar", casos: 18, prevenidos: 14 },
//     { mes: "Abr", casos: 14, prevenidos: 10 },
//     { mes: "Mai", casos: 22, prevenidos: 17 },
//     { mes: "Jun", casos: 19, prevenidos: 15 },
//   ];

//   // Distribuição por zonas
//   const zonasDados = [
//     { zona: "Maputo", casos: 45, vulneraveis: 120 },
//     { zona: "Matola", casos: 32, vulneraveis: 95 },
//     { zona: "Beira", casos: 28, vulneraveis: 78 },
//     { zona: "Nampula", casos: 35, vulneraveis: 102 },
//     { zona: "Tete", casos: 18, vulneraveis: 56 },
//   ];

//   // Distribuição por tipo de tráfico
//   const tipoTrafico = [
//     { tipo: "Trabalho Forçado", valor: 42, cor: "#6366f1" },
//     { tipo: "Exploração Sexual", valor: 28, cor: "#ec4899" },
//     { tipo: "Mendicidade", valor: 15, cor: "#f59e0b" },
//     { tipo: "Outros", valor: 15, cor: "#8b5cf6" },
//   ];

//   // Estatísticas de faixa etária
//   const faixaEtaria = [
//     { faixa: "0-17", total: 35 },
//     { faixa: "18-25", total: 48 },
//     { faixa: "26-35", total: 32 },
//     { faixa: "36-45", total: 18 },
//     { faixa: "46+", total: 10 },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex items-center space-x-3 mb-2">
//             <div className="bg-indigo-600 p-3 rounded-lg shadow-lg">
//               <Shield className="w-8 h-8 text-white" />
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 Dashboard SafeNet
//               </h1>
//               <p className="text-gray-600">
//                 Estatísticas e Monitoramento em Tempo Real
//               </p>
//             </div>
//           </div>

//           {/* Filtro de Período */}
//           <div className="flex items-center space-x-2 mt-4">
//             <Calendar className="w-5 h-5 text-gray-600" />
//             <select
//               value={selectedPeriod}
//               onChange={(e) => setSelectedPeriod(e.target.value)}
//               className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
//             >
//               <option value="semana">Última Semana</option>
//               <option value="mes">Último Mês</option>
//               <option value="trimestre">Último Trimestre</option>
//               <option value="ano">Último Ano</option>
//             </select>
//           </div>
//         </div>

//         {/* Cards de Estatísticas Principais */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {/* Total de Casos */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
//             <div className="flex items-center justify-between mb-4">
//               <div className="bg-red-100 p-3 rounded-lg">
//                 <AlertTriangle className="w-6 h-6 text-red-600" />
//               </div>
//               <div className="flex items-center text-red-600 text-sm font-semibold">
//                 <ArrowUp className="w-4 h-4" />
//                 <span>+12%</span>
//               </div>
//             </div>
//             <h3 className="text-gray-600 text-sm font-medium mb-1">
//               Casos Identificados
//             </h3>
//             <p className="text-3xl font-bold text-gray-900">158</p>
//             <p className="text-xs text-gray-500 mt-2">Últimos 6 meses</p>
//           </div>

//           {/* Casos Prevenidos */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
//             <div className="flex items-center justify-between mb-4">
//               <div className="bg-green-100 p-3 rounded-lg">
//                 <Shield className="w-6 h-6 text-green-600" />
//               </div>
//               <div className="flex items-center text-green-600 text-sm font-semibold">
//                 <ArrowUp className="w-4 h-4" />
//                 <span>+18%</span>
//               </div>
//             </div>
//             <h3 className="text-gray-600 text-sm font-medium mb-1">
//               Casos Prevenidos
//             </h3>
//             <p className="text-3xl font-bold text-gray-900">1,247</p>
//             <p className="text-xs text-gray-500 mt-2">
//               Intervenções bem-sucedidas
//             </p>
//           </div>

//           {/* Pessoas Vulneráveis */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
//             <div className="flex items-center justify-between mb-4">
//               <div className="bg-yellow-100 p-3 rounded-lg">
//                 <Users className="w-6 h-6 text-yellow-600" />
//               </div>
//               <div className="flex items-center text-yellow-600 text-sm font-semibold">
//                 <ArrowDown className="w-4 h-4" />
//                 <span>-8%</span>
//               </div>
//             </div>
//             <h3 className="text-gray-600 text-sm font-medium mb-1">
//               Pessoas Vulneráveis
//             </h3>
//             <p className="text-3xl font-bold text-gray-900">451</p>
//             <p className="text-xs text-gray-500 mt-2">
//               Identificadas e monitoradas
//             </p>
//           </div>

//           {/* Links Verificados */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
//             <div className="flex items-center justify-between mb-4">
//               <div className="bg-indigo-100 p-3 rounded-lg">
//                 <Eye className="w-6 h-6 text-indigo-600" />
//               </div>
//               <div className="flex items-center text-indigo-600 text-sm font-semibold">
//                 <ArrowUp className="w-4 h-4" />
//                 <span>+24%</span>
//               </div>
//             </div>
//             <h3 className="text-gray-600 text-sm font-medium mb-1">
//               Links Verificados
//             </h3>
//             <p className="text-3xl font-bold text-gray-900">5,892</p>
//             <p className="text-xs text-gray-500 mt-2">Este mês</p>
//           </div>
//         </div>

//         {/* Gráficos */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           {/* Evolução Temporal */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//               <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" />
//               Evolução de Casos
//             </h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={casosTemporais}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                 <XAxis dataKey="mes" stroke="#6b7280" />
//                 <YAxis stroke="#6b7280" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#fff",
//                     border: "1px solid #e5e7eb",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="casos"
//                   stroke="#ef4444"
//                   strokeWidth={3}
//                   name="Casos Identificados"
//                   dot={{ fill: "#ef4444", r: 5 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="prevenidos"
//                   stroke="#10b981"
//                   strokeWidth={3}
//                   name="Casos Prevenidos"
//                   dot={{ fill: "#10b981", r: 5 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Tipos de Tráfico */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">
//               Tipos de Tráfico
//             </h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={tipoTrafico}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={({ tipo, valor }) => `${tipo}: ${valor}%`}
//                   outerRadius={100}
//                   fill="#8884d8"
//                   dataKey="valor"
//                 >
//                   {tipoTrafico.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.cor} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Distribuição por Zonas e Faixa Etária */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           {/* Zonas de Risco */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//               <MapPin className="w-5 h-5 mr-2 text-red-600" />
//               Distribuição por Zonas
//             </h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={zonasDados}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                 <XAxis dataKey="zona" stroke="#6b7280" />
//                 <YAxis stroke="#6b7280" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#fff",
//                     border: "1px solid #e5e7eb",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <Legend />
//                 <Bar
//                   dataKey="casos"
//                   fill="#ef4444"
//                   name="Casos"
//                   radius={[8, 8, 0, 0]}
//                 />
//                 <Bar
//                   dataKey="vulneraveis"
//                   fill="#f59e0b"
//                   name="Vulneráveis"
//                   radius={[8, 8, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Faixa Etária */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">
//               Distribuição por Faixa Etária
//             </h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={faixaEtaria} layout="vertical">
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                 <XAxis type="number" stroke="#6b7280" />
//                 <YAxis dataKey="faixa" type="category" stroke="#6b7280" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#fff",
//                     border: "1px solid #e5e7eb",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <Bar dataKey="total" fill="#6366f1" radius={[0, 8, 8, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Lista de Zonas com Detalhes */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow">
//           <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//             <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
//             Detalhes por Zona
//           </h3>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b-2 border-gray-200">
//                   <th className="text-left py-3 px-4 text-gray-700 font-semibold">
//                     Zona
//                   </th>
//                   <th className="text-left py-3 px-4 text-gray-700 font-semibold">
//                     Casos
//                   </th>
//                   <th className="text-left py-3 px-4 text-gray-700 font-semibold">
//                     Vulneráveis
//                   </th>
//                   <th className="text-left py-3 px-4 text-gray-700 font-semibold">
//                     Nível de Risco
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {zonasDados.map((zona, index) => {
//                   const risco =
//                     zona.casos > 35
//                       ? "Alto"
//                       : zona.casos > 25
//                       ? "Médio"
//                       : "Baixo";
//                   const riscoColor =
//                     risco === "Alto"
//                       ? "bg-red-100 text-red-700"
//                       : risco === "Médio"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-green-100 text-green-700";

//                   return (
//                     <tr
//                       key={index}
//                       className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="py-3 px-4 font-medium text-gray-900">
//                         {zona.zona}
//                       </td>
//                       <td className="py-3 px-4 text-gray-700">{zona.casos}</td>
//                       <td className="py-3 px-4 text-gray-700">
//                         {zona.vulneraveis}
//                       </td>
//                       <td className="py-3 px-4">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-semibold ${riscoColor}`}
//                         >
//                           {risco}
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Alertas e Notificações */}
//         <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
//           <div className="flex items-start space-x-4">
//             <div className="bg-red-100 p-3 rounded-lg">
//               <AlertTriangle className="w-6 h-6 text-red-600" />
//             </div>
//             <div className="flex-1">
//               <h4 className="text-lg font-bold text-gray-900 mb-2">
//                 Alerta de Segurança
//               </h4>
//               <p className="text-gray-700 mb-3">
//                 Aumento de 23% em ofertas suspeitas de emprego nas redes sociais
//                 nas últimas 2 semanas. Reforce a vigilância e educação nas
//                 comunidades de Maputo e Matola.
//               </p>
//               <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium shadow-md hover:shadow-lg">
//                 Ver Detalhes
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Ações Recentes */}
//         <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//           <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//             <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
//             Ações Recentes
//           </h3>
//           <div className="space-y-4">
//             <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
//               <div className="bg-green-100 p-2 rounded-lg">
//                 <Shield className="w-5 h-5 text-green-600" />
//               </div>
//               <div className="flex-1">
//                 <p className="text-sm font-semibold text-gray-900">
//                   Operação de resgate bem-sucedida em Matola
//                 </p>
//                 <p className="text-xs text-gray-600 mt-1">
//                   12 pessoas resgatadas de situação de trabalho forçado - Há 2
//                   horas
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
//               <div className="bg-blue-100 p-2 rounded-lg">
//                 <Eye className="w-5 h-5 text-blue-600" />
//               </div>
//               <div className="flex-1">
//                 <p className="text-sm font-semibold text-gray-900">
//                   Link suspeito bloqueado
//                 </p>
//                 <p className="text-xs text-gray-600 mt-1">
//                   Oferta falsa de emprego na África do Sul identificada - Há 5
//                   horas
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
//               <div className="bg-purple-100 p-2 rounded-lg">
//                 <Users className="w-5 h-5 text-purple-600" />
//               </div>
//               <div className="flex-1">
//                 <p className="text-sm font-semibold text-gray-900">
//                   Campanha de sensibilização em Nampula
//                 </p>
//                 <p className="text-xs text-gray-600 mt-1">
//                   350 pessoas alcançadas com informação sobre prevenção - Ontem
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
