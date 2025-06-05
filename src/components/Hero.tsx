
import React from 'react';
import { ArrowDown, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadCV = (type: 'formal' | 'moderno') => {
    // Para implementar o download real, você precisará adicionar os arquivos PDF na pasta public
    // Por enquanto, vou simular com alert
    if (type === 'formal') {
      alert('Download do CV Formal iniciado! (Adicione o arquivo PDF na pasta public/cv-formal.pdf)');
    } else {
      alert('Download do CV Moderno iniciado! (Adicione o arquivo PDF na pasta public/cv-moderno.pdf)');
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
                Olá, eu sou{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Hygor Rocha
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
                Desenvolvedor Full Stack
              </h2>
              
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Desenvolvedor apaixonado por tecnologia, especializado em desenvolvimento web moderno. 
                Procuro oportunidades na área de desenvolvimento de sistemas que possam trazer novas 
                perspectivas de futuro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    onClick={() => handleDownloadCV('moderno')}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    CV Moderno
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300"
                    onClick={() => handleDownloadCV('formal')}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    CV Formal
                  </Button>
                </div>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-400 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Entre em Contato
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-2 animate-scale-in">
                <div className="w-full h-full rounded-full bg-white p-4 shadow-2xl overflow-hidden">
                  <img
                    src="/lovable-uploads/b5a0c7e8-1234-5678-9abc-def012345678.png"
                    alt="Hygor Rocha"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <ArrowDown className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
