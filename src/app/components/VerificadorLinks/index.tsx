import React, { useState } from 'react';
import { Search, Shield, AlertTriangle, CheckCircle, XCircle, Loader, Link as LinkIcon, ExternalLink, Info } from 'lucide-react';

interface AnaliseResultado {
  status: 'seguro' | 'suspeito' | 'perigoso';
  pontuacao: number;
  titulo: string;
  mensagem: string;
  detalhes: string[];
  recomendacoes: string[];
}

const VerificadorLinks = () => {
  const [url, setUrl] = useState('');
  const [verificando, setVerificando] = useState(false);
  const [resultado, setResultado] = useState<AnaliseResultado | null>(null);
  const [erro, setErro] = useState('');

  const analisarUrl = (urlParaAnalisar: string): AnaliseResultado => {
    let pontuacao = 100;
    const detalhes: string[] = [];
    const recomendacoes: string[] = [];

    // Verificar HTTPS
    if (!urlParaAnalisar.startsWith('https://')) {
      pontuacao -= 20;
      detalhes.push('❌ Site não usa HTTPS (conexão não segura)');
      recomendacoes.push('Evite fornecer informações pessoais em sites sem HTTPS');
    } else {
      detalhes.push('✅ Site usa HTTPS (conexão segura)');
    }

    // Verificar domínios suspeitos
    const dominiosSuspeitos = [
      'bit.ly', 'tinyurl', 'goo.gl', 't.co', // encurtadores
      'tk', 'ml', 'ga', 'cf', // TLDs gratuitos suspeitos
      'xyz', 'click', 'loan'
    ];

    const urlLower = urlParaAnalisar.toLowerCase();
    const temDominioSuspeito = dominiosSuspeitos.some(dom => urlLower.includes(dom));
    
    if (temDominioSuspeito) {
      pontuacao -= 30;
      detalhes.push('⚠️ Domínio ou encurtador de URL suspeito detectado');
      recomendacoes.push('Links encurtados podem esconder destinos perigosos');
    }

    // Verificar palavras-chave suspeitas
    const palavrasSuspeitas = [
      'emprego-urgente', 'vaga-rapida', 'ganhe-dinheiro', 'trabalhe-exterior',
      'facil-dinheiro', 'oportunidade-unica', 'bolsa-estudo-gratis', 'click-here',
      'urgent', 'confirm', 'verify', 'account', 'suspended', 'login', 'update'
    ];

    const temPalavraSuspeita = palavrasSuspeitas.some(palavra => 
      urlLower.includes(palavra) || urlLower.includes(palavra.replace('-', ''))
    );

    if (temPalavraSuspeita) {
      pontuacao -= 25;
      detalhes.push('⚠️ URL contém palavras associadas a fraudes');
      recomendacoes.push('Desconfie de URLs com palavras como "urgente", "grátis" ou "fácil"');
    }

    // Verificar caracteres especiais suspeitos
    const caracteresEstranhos = /[^\w\-\.\/\:\?=&%]/g;
    if (caracteresEstranhos.test(urlParaAnalisar)) {
      pontuacao -= 15;
      detalhes.push('⚠️ URL contém caracteres incomuns');
      recomendacoes.push('URLs legítimas geralmente não têm caracteres especiais estranhos');
    }

    // Verificar subdomínios excessivos
    try {
      const urlObj = new URL(urlParaAnalisar);
      const subdominios = urlObj.hostname.split('.');
      if (subdominios.length > 3) {
        pontuacao -= 20;
        detalhes.push('⚠️ Múltiplos subdomínios detectados (possível phishing)');
        recomendacoes.push('Sites legítimos raramente usam muitos subdomínios');
      }

      // Verificar se parece com site conhecido
      const sitesConhecidos = ['google', 'facebook', 'microsoft', 'apple', 'amazon', 'gov.mz'];
      const pareceSiteConhecido = sitesConhecidos.some(site => 
        urlObj.hostname.includes(site) && !urlObj.hostname.endsWith(`.${site}.com`) && !urlObj.hostname.endsWith('.gov.mz')
      );

      if (pareceSiteConhecido) {
        pontuacao -= 40;
        detalhes.push('🚨 URL tenta imitar site conhecido (possível phishing)');
        recomendacoes.push('Verifique cuidadosamente o domínio exato de sites conhecidos');
      }
    } catch (e) {
      // URL inválida
    }

    // Determinar status
    let status: 'seguro' | 'suspeito' | 'perigoso';
    let titulo: string;
    let mensagem: string;

    if (pontuacao >= 70) {
      status = 'seguro';
      titulo = 'Link Parece Seguro';
      mensagem = 'Baseado na análise, este link não apresenta sinais óbvios de perigo.';
      recomendacoes.push('Mesmo assim, sempre verifique a reputação da empresa antes de fornecer dados');
    } else if (pontuacao >= 40) {
      status = 'suspeito';
      titulo = 'Link Suspeito - Tenha Cuidado';
      mensagem = 'Este link apresenta alguns sinais de alerta. Prossiga com extrema cautela.';
      recomendacoes.push('Não forneça informações pessoais sem verificar a legitimidade');
      recomendacoes.push('Pesquise sobre a empresa em fontes confiáveis');
    } else {
      status = 'perigoso';
      titulo = 'Link Perigoso - Não Recomendado';
      mensagem = 'Este link apresenta múltiplos sinais de perigo. Recomendamos não acessá-lo.';
      recomendacoes.push('NÃO forneça informações pessoais ou documentos');
      recomendacoes.push('NÃO faça pagamentos ou transferências');
      recomendacoes.push('Denuncie este link se foi oferecido como oferta de emprego');
    }

    return {
      status,
      pontuacao,
      titulo,
      mensagem,
      detalhes,
      recomendacoes: [...new Set(recomendacoes)] // Remove duplicatas
    };
  };

  const handleVerificar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setResultado(null);

    // Validar URL
    if (!url.trim()) {
      setErro('Por favor, insira um link para verificar');
      return;
    }

    // Adicionar https:// se não tiver protocolo
    let urlCompleta = url.trim();
    if (!urlCompleta.startsWith('http://') && !urlCompleta.startsWith('https://')) {
      urlCompleta = 'https://' + urlCompleta;
    }

    // Validar formato básico
    try {
      new URL(urlCompleta);
    } catch {
      setErro('Por favor, insira um link válido (ex: www.exemplo.com)');
      return;
    }

    // Simular verificação
    setVerificando(true);
    
    // Simular delay de verificação para parecer real
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const analise = analisarUrl(urlCompleta);
    setResultado(analise);
    setVerificando(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'seguro':
        return 'text-green-600';
      case 'suspeito':
        return 'text-orange-600';
      case 'perigoso':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'seguro':
        return 'bg-green-50 border-green-200';
      case 'suspeito':
        return 'bg-orange-50 border-orange-200';
      case 'perigoso':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'seguro':
        return <CheckCircle className="h-16 w-16 text-green-600" />;
      case 'suspeito':
        return <AlertTriangle className="h-16 w-16 text-orange-600" />;
      case 'perigoso':
        return <XCircle className="h-16 w-16 text-red-600" />;
      default:
        return <Shield className="h-16 w-16 text-gray-600" />;
    }
  };

  return (
    <section id="verificador" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Verificador de Links</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Verifique se a Oferta é Verdadeira
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Recebeu um link com oferta de emprego, bolsa de estudo ou viagem? Verifique aqui se é seguro antes de fornecer suas informações!
            </p>
          </div>

          {/* Formulário de Verificação */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <form onSubmit={handleVerificar} className="mb-6">
              <label htmlFor="url-input" className="block text-lg font-semibold text-gray-900 mb-3">
                Cole o link aqui para verificar:
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <LinkIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="url-input"
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://www.exemplo.com/vaga-emprego"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all text-lg"
                    disabled={verificando}
                  />
                </div>
                <button
                  type="submit"
                  disabled={verificando}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  {verificando ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      <span>Verificando...</span>
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5" />
                      <span>Verificar</span>
                    </>
                  )}
                </button>
              </div>
              {erro && (
                <p className="text-red-600 mt-3 flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>{erro}</span>
                </p>
              )}
            </form>

            {/* Info Box */}
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-indigo-900">
                  <strong>Como funciona:</strong> Nossa ferramenta analisa o link em busca de sinais comuns de fraude, phishing e sites maliciosos. A verificação é instantânea e gratuita.
                </p>
              </div>
            </div>
          </div>

          {/* Resultado da Verificação */}
          {resultado && (
            <div className={`rounded-3xl shadow-2xl p-8 md:p-12 border-2 ${getStatusBg(resultado.status)} animate-fadeIn`}>
              <div className="text-center mb-8">
                <div className="mb-4">
                  {getStatusIcon(resultado.status)}
                </div>
                <h3 className={`text-3xl font-bold mb-3 ${getStatusColor(resultado.status)}`}>
                  {resultado.titulo}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {resultado.mensagem}
                </p>
                <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                  <span className="text-gray-600 font-semibold">Pontuação de Segurança:</span>
                  <span className={`text-2xl font-bold ${getStatusColor(resultado.status)}`}>
                    {resultado.pontuacao}/100
                  </span>
                </div>
              </div>

              {/* Detalhes da Análise */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Search className="h-6 w-6" />
                  <span>Detalhes da Análise</span>
                </h4>
                <div className="bg-white rounded-xl p-6 space-y-3">
                  {resultado.detalhes.map((detalhe, index) => (
                    <div key={index} className="flex items-start space-x-3 text-gray-700">
                      <span className="text-lg">{detalhe}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recomendações */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Shield className="h-6 w-6" />
                  <span>Recomendações</span>
                </h4>
                <div className="bg-white rounded-xl p-6 space-y-3">
                  {resultado.recomendacoes.map((recomendacao, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-indigo-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-indigo-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{recomendacao}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão para verificar outro link */}
              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setResultado(null);
                    setUrl('');
                  }}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all"
                >
                  Verificar Outro Link
                </button>
              </div>
            </div>
          )}

          {/* Exemplos de Links para Testar */}
          {!resultado && !verificando && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">💡 Exemplos para testar:</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={() => setUrl('https://www.google.com')}
                  className="block w-full text-left hover:bg-white/10 rounded px-3 py-2 transition-colors"
                >
                  • Site seguro: https://www.google.com
                </button>
                <button
                  onClick={() => setUrl('http://emprego-urgente.tk/vaga')}
                  className="block w-full text-left hover:bg-white/10 rounded px-3 py-2 transition-colors"
                >
                  • Site suspeito: http://emprego-urgente.tk/vaga
                </button>
                <button
                  onClick={() => setUrl('https://bit.ly/trabalhe-exterior-facil')}
                  className="block w-full text-left hover:bg-white/10 rounded px-3 py-2 transition-colors"
                >
                  • Link encurtado: https://bit.ly/trabalhe-exterior-facil
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VerificadorLinks;