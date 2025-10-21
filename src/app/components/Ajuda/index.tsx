import React from 'react';
import { Phone, AlertCircle, Users, MapPin, FileText, Heart, Shield } from 'lucide-react';

const Ajuda = () => {
  const passosImediatos = [
    {
      numero: '1',
      icon: AlertCircle,
      titulo: 'Reconheça a Situação',
      descricao: 'Se você ou alguém que conhece está em perigo iminente ou sendo aliciado, reconheça os sinais e não ignore seus instintos.'
    },
    {
      numero: '2',
      icon: Phone,
      titulo: 'Entre em Contacto',
      descricao: 'Ligue imediatamente para as autoridades ou linhas de apoio. Não espere - cada minuto conta.'
    },
    {
      numero: '3',
      icon: Users,
      titulo: 'Procure Apoio',
      descricao: 'Fale com pessoas de confiança: família, amigos, professores ou líderes comunitários que possam ajudar.'
    },
    {
      numero: '4',
      icon: FileText,
      titulo: 'Documente Tudo',
      descricao: 'Guarde mensagens, anúncios, números de telefone e qualquer evidência que possa ajudar as autoridades.'
    }
  ];

  const contactosEmergencia = [
    {
      nome: 'Polícia de Moçambique',
      numero: '119',
      icon: Shield,
      descricao: 'Emergências policiais e denúncias de crimes'
    },
    {
      nome: 'Linha Fala Criança',
      numero: '116',
      icon: Heart,
      descricao: 'Apoio especializado para crianças e adolescentes'
    },
    {
      nome: 'Procuradoria Geral da República',
      numero: '+258 21 303 740',
      icon: FileText,
      descricao: 'Denúncias de tráfico de pessoas'
    },
    {
      nome: 'UNODC Moçambique',
      numero: '+258 21 495 906',
      icon: Users,
      descricao: 'Escritório das Nações Unidas sobre Drogas e Crime'
    }
  ];

  const sinaisVitima = [
    'Não possui documentos de identificação ou estes estão retidos por outra pessoa',
    'Não tem liberdade de movimento ou comunicação',
    'Trabalha longas horas sem remuneração adequada ou descanso',
    'Vive em condições precárias ou insalubres',
    'Apresenta sinais de abuso físico ou psicológico',
    'Está sempre acompanhado por alguém que fala por ele/ela',
    'Parece temeroso, ansioso ou submisso',
    'Menciona que deve dinheiro a alguém e não pode sair até pagar'
  ];

  return (
    <section id="ajuda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Heart className="h-5 w-5" />
              <span className="font-semibold">Ajuda e Apoio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que Fazer em Situação de Risco
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passos práticos para proteger-se ou ajudar alguém em situação de tráfico humano
            </p>
          </div>

          {/* Emergency Alert */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-3">
                  ⚠️ Em Situação de Emergência Imediata
                </h3>
                <p className="text-lg text-red-800 mb-4">
                  Se você ou alguém está em perigo imediato, ligue para a polícia ou procure ajuda presencial o mais rápido possível. Sua segurança é prioridade!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:119"
                    className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all inline-flex items-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Ligar 119</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Passos Imediatos */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Passos a Seguir
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {passosImediatos.map((passo, index) => {
                const Icon = passo.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {passo.numero}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon className="h-6 w-6 text-indigo-600" />
                          <h4 className="text-xl font-bold text-gray-900">{passo.titulo}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{passo.descricao}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contactos de Emergência */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📞 Contactos de Emergência
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactosEmergencia.map((contacto, index) => {
                const Icon = contacto.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-indigo-500"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{contacto.nome}</h4>
                        <a
                          href={`tel:${contacto.numero.replace(/\s/g, '')}`}
                          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 mb-2 block"
                        >
                          {contacto.numero}
                        </a>
                        <p className="text-sm text-gray-600">{contacto.descricao}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sinais de que alguém pode ser vítima */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Users className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Como Identificar uma Vítima
                </h3>
                <p className="text-lg text-gray-700">
                  Se você suspeita que alguém está sendo vítima de tráfico, observe estes sinais:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sinaisVitima.map((sinal, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4">
                    <div className="bg-amber-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 font-bold text-sm">!</span>
                    </div>
                    <p className="text-gray-700">{sinal}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-800 font-semibold">
                  Se você observar esses sinais, denuncie imediatamente!
                </p>
              </div>
            </div>
          </div>

          {/* Informação adicional */}
          <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-200">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-3">
                  Lembre-se: Você Não Está Sozinho
                </h3>
                <p className="text-indigo-800 leading-relaxed mb-4">
                  Há organizações, autoridades e pessoas prontas para ajudar. Não tenha vergonha ou medo de pedir ajuda. O tráfico de pessoas é um crime grave e você tem direito à proteção e apoio.
                </p>
                <p className="text-indigo-800 leading-relaxed">
                  Todas as denúncias são tratadas com seriedade e confidencialidade. Ao denunciar, você pode salvar vidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ajuda;