import React from 'react';
import { Shield, Eye, MessageCircle, FileCheck, UserX, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

const Prevencao = () => {
  const sinaisAlerta = [
    {
      icon: AlertTriangle,
      color: 'red',
      titulo: 'Promessas Irrealistas',
      descricao: 'Ofertas de emprego com salários muito altos sem experiência necessária ou processos de seleção muito simples'
    },
    {
      icon: Lock,
      color: 'orange',
      titulo: 'Pedidos de Documentos',
      descricao: 'Solicitação imediata de documentos pessoais (passaporte, BI, certidões) antes de entrevista formal'
    },
    {
      icon: UserX,
      color: 'purple',
      titulo: 'Isolamento',
      descricao: 'Tentativas de afastá-lo da família e amigos, ou propor viagens sem acompanhantes conhecidos'
    },
    {
      icon: MessageCircle,
      color: 'blue',
      titulo: 'Pressão e Urgência',
      descricao: 'Insistência para tomar decisões rápidas sem tempo para verificar ou consultar outras pessoas'
    }
  ];

  const dicasPrevencao = [
    {
      icon: Eye,
      titulo: 'Verifique Sempre',
      dicas: [
        'Pesquise sobre a empresa no Google e redes sociais',
        'Procure avaliações e comentários de outras pessoas',
        'Verifique se o endereço e contactos da empresa são reais',
        'Use o verificador de links da SafeNet'
      ]
    },
    {
      icon: Shield,
      titulo: 'Proteja Suas Informações',
      dicas: [
        'Nunca envie documentos pessoais antes de confirmar a legitimidade',
        'Não faça pagamentos antecipados para "garantir" vagas',
        'Desconfie de pedidos de informações bancárias',
        'Não partilhe fotos íntimas ou comprometedoras'
      ]
    },
    {
      icon: MessageCircle,
      titulo: 'Comunique-se Abertamente',
      dicas: [
        'Conte sempre à família sobre oportunidades que receber',
        'Leve alguém de confiança às entrevistas',
        'Mantenha contacto regular com pessoas próximas',
        'Não aceite propostas que exigem segredo'
      ]
    },
    {
      icon: FileCheck,
      titulo: 'Confirme a Legitimidade',
      dicas: [
        'Visite o local da empresa pessoalmente quando possível',
        'Peça contratos escritos e leia-os cuidadosamente',
        'Consulte autoridades locais sobre a empresa',
        'Confirme ofertas de emprego no exterior com a embaixada'
      ]
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-500' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-500' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-500' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-500' }
  };

  return (
    <section id="prevencao" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Prevenção</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Como Evitar o Tráfico de Pessoas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os sinais de alerta e aprenda a proteger-se de ofertas suspeitas
            </p>
          </div>

          {/* Sinais de Alerta */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🚨 Sinais de Alerta
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sinaisAlerta.map((sinal, index) => {
                const Icon = sinal.icon;
                const colors = colorClasses[sinal.color];
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 ${colors.border}`}
                  >
                    <div className={`${colors.bg} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 ${colors.text}`} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{sinal.titulo}</h4>
                    <p className="text-gray-600 leading-relaxed">{sinal.descricao}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dicas de Prevenção */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ✅ Dicas de Prevenção
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dicasPrevencao.map((categoria, index) => {
                const Icon = categoria.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">{categoria.titulo}</h4>
                    </div>
                    <ul className="space-y-3">
                      {categoria.dicas.map((dica, dicaIndex) => (
                        <li key={dicaIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{dica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Na dúvida, não arrisque!
            </h3>
            <p className="text-xl text-indigo-100 mb-6 max-w-2xl mx-auto">
              Use nossa ferramenta de verificação de links para confirmar se uma oferta é legítima antes de fornecer qualquer informação pessoal.
            </p>
            <button
              onClick={() => document.getElementById('verificador')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg hover:scale-105 transform"
            >
              Verificar Link Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prevencao;