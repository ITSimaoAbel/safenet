"use client";
import React, { useState } from 'react';
import { Menu, X, Shield, AlertTriangle, Phone, Link as LinkIcon } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-indigo-600">SafeNet</h1>
              <p className="text-xs text-gray-600">Protegendo Vidas, Criando Consciência</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('info')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Informações
            </button>
            <button 
              onClick={() => scrollToSection('verificador')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Verificar Link
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium"
            >
              Denunciar
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('info')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-left"
              >
                Informações
              </button>
              <button 
                onClick={() => scrollToSection('verificador')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-left"
              >
                Verificar Link
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium"
              >
                Denunciar
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Phone className="w-4 h-4" />
            <span className="font-medium">Emergência? Linha de Apoio 24h:</span>
            <a href="tel:1400" className="underline font-bold">1400</a>
          </div>
        </div>
      </div>
    </header>
  );
}
