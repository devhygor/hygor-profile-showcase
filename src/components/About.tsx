
import React from 'react';
import { Calendar, MapPin, Phone, Mail, User, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const personalData = [
    { icon: User, label: 'Nome', value: 'Hygor Melo Rocha' },
    { icon: Calendar, label: 'Data de Nascimento', value: '12 de novembro de 1996' },
    { icon: MapPin, label: 'Endereço', value: 'Novo Gama - GO' },
    { icon: Phone, label: 'Telefone', value: '(61) 9 8159-2866' },
    { icon: Mail, label: 'Email', value: 'hygor.k92@gmail.com' },
    { icon: Heart, label: 'Estado Civil', value: 'Casado' }
  ];

  const competencies = [
    'Proatividade',
    'Organização', 
    'Trabalho em equipe',
    'Comprometimento',
    'Resolução de problemas',
    'Comunicação efetiva'
  ];

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvedor dedicado com paixão por criar soluções inovadoras e eficientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Information */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-blue-600" />
                Dados Pessoais
              </h3>
              
              <div className="space-y-4">
                {personalData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competencies */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Competências
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {competencies.map((competency, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:border-blue-200 transition-all duration-200 hover:shadow-md"
                  >
                    <p className="font-medium text-gray-900">{competency}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Description */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Perfil Profissional</h3>
            <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto">
              Desenvolvedor Full Stack com sólida experiência em desenvolvimento de aplicações web utilizando 
              tecnologias modernas como React, Node.js e TypeScript. Python é minha linguagem favorita, onde 
              desenvolvo scripts de automação e aplicações backend robustas. Formado em Análise e Desenvolvimento de 
              Sistemas, tenho paixão por criar soluções inovadoras e eficientes. Busco constantemente novas 
              oportunidades para desenvolver minhas habilidades e contribuir para o sucesso de projetos desafiadores.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
