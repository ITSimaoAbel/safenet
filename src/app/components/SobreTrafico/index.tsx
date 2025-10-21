import React from 'react';
import { AlertCircle, Users, Briefcase, Globe, TrendingDown } from 'lucide-react';

const SobreTrafico = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
              <AlertCircle className="h-5 w-5" />
              <span className="font-semibold">Informação Vital</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que é Tráfico de Pessoas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma das formas mais graves de violação dos direitos humanos que afeta milhares de pessoas em Moçambique
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O tráfico de seres humanos é o recrutamento, transporte, transferência ou acolhimento de pessoas através de ameaça, uso da força, coerção, rapto, fraude ou engano, para fins de exploração.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As vítimas são frequentemente enganadas através de <strong className="text-indigo-600">promessas falsas de emprego, educação ou viagens</strong>, caracterizando técnicas de manipulação e engenharia social usadas de forma maliciosa.
            </p>
          </div>

          {/* Types of Trafficking */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-500">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trabalho Forçado</h3>
              <p className="text-gray-600">
                Exploração através de trabalho sem remuneração adequada ou condições desumanas
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Exploração Sexual</h3>
              <p className="text-gray-600">
                Forçar pessoas a realizar atos sexuais contra sua vontade para lucro de terceiros
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tráfico Internacional</h3>
              <p className="text-gray-600">
                Transporte ilegal de pessoas através de fronteiras para exploração
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Remoção de Órgãos</h3>
              <p className="text-gray-600">
                Extração ilegal de órgãos para venda no mercado negro
              </p>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  Como os Traficantes Operam?
                </h3>
                <ul className="space-y-3 text-amber-900">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Promessas de empregos bem remunerados no exterior ou em outras províncias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Ofertas de educação gratuita ou bolsas de estudo falsas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Propostas de casamento ou relacionamentos com pessoas desconhecidas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Uso de redes sociais e aplicativos de mensagens para ganhar confiança</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Pedidos urgentes de documentos pessoais ou pagamentos antecipados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreTrafico;