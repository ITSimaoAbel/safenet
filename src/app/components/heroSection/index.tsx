"use client";
import React from 'react';
import { Shield, AlertTriangle, Heart } from 'lucide-react';

const HeroSection = () => {
  const scrollToVerificador = () => {
    const element = document.getElementById('verificador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold">Plataforma de Prevenção ao Tráfico de Pessoas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Proteja-se de
            <span className="block text-yellow-300">Ofertas Falsas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            O tráfico de pessoas começa com promessas falsas. Aprenda a reconhecer os sinais e verifique a segurança de ofertas de emprego e viagens.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToVerificador}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl hover:shadow-xl hover:scale-105 transform"
            >
              Verificar Link Agora
            </button>
            <button
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Saiba Mais
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm text-indigo-100">Casos Prevenidos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-3xl font-bold mb-1">5000+</div>
              <div className="text-sm text-indigo-100">Links Verificados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-8 w-8 text-pink-300" />
              </div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-indigo-100">Proteção Ativa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;