
import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const education = [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'UNOPAR',
      location: 'Novo Gama - GO',
      period: '2019 - 2022',
      type: 'Ensino Superior'
    },
    {
      title: 'Ensino Médio',
      institution: 'Carlos Drummond De Andrade',
      location: 'Novo Gama - GO',
      period: '2011 - 2013',
      type: 'Educação Básica'
    }
  ];

  const workExperience = [
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Pasquali',
      location: 'Brasília - DF',
      period: '2024 - Presente',
      description: 'Desenvolvimento de aplicações web full stack utilizando tecnologias modernas como React, Node.js e bases de dados relacionais. Foco em soluções escaláveis e performance otimizada.'
    },
    {
      title: 'Desenvolvedor Front-end',
      company: 'Resale',
      location: 'Brasília - DF',
      period: '2023 - 2024',
      description: 'Desenvolvimento de interfaces de usuário responsivas e interativas utilizando React, TypeScript e frameworks CSS modernos. Colaboração em equipe ágil para entrega de projetos de alta qualidade.'
    },
    {
      title: 'Auxiliar de escritório em geral',
      company: 'Centro de integração Empresa Escola',
      location: 'Brasília - DF',
      period: '2018 - 2019',
      description: 'Responsável por atividades administrativas e suporte geral ao escritório.'
    },
    {
      title: 'Militar',
      company: 'Comando da Aeronáutica',
      location: 'Brasília - DF', 
      period: '2017 - 2018',
      description: 'Serviço militar obrigatório com foco em disciplina e trabalho em equipe.'
    }
  ];

  const courses = [
    {
      name: 'Python: aplicando a Orientação a Objetos',
      provider: 'Alura',
      certificateUrl: 'https://cursos.alura.com.br/certificate/17fc4bc3-43f6-4e4e-8f1b-2acc7ad36314'
    },
    {
      name: 'Python: criando a sua primeira aplicação',
      provider: 'Alura',
      certificateUrl: 'https://cursos.alura.com.br/certificate/hygor-rocha/python-primeira-aplicacao'
    },
    {
      name: 'Python: começando com a linguagem',
      provider: 'Alura',
      certificateUrl: 'https://cursos.alura.com.br/certificate/hygor-rocha/python-introducao'
    },
    {
      name: 'Git e GitHub: repositório, commit e versões',
      provider: 'Alura',
      certificateUrl: 'https://cursos.alura.com.br/certificate/hygor-rocha/git-github-repositorio-commit-versoes'
    },
    {
      name: 'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags',
      provider: 'Alura',
      certificateUrl: 'https://cursos.alura.com.br/certificate/hygor-rocha/html-css-ambiente-arquivos-tags'
    },
    {
      name: 'HTML e CSS: Classes, posicionamento e Flexbox',
      provider: 'Alura',
      certificateUrl: 'https://cursos.alura.com.br/certificate/hygor-rocha/html-css-classes-posicionamento-flexbox'
    },
    {
      name: 'React: desenvolvendo com JavaScript',
      provider: 'Alura',
      certificateUrl: 'https://cursos.alura.com.br/certificate/hygor-rocha/react-desenvolvendo-javascript'
    },
    {
      name: 'JavaScript: programando na linguagem da web',
      provider: 'Alura',
      certificateUrl: 'https://cursos.alura.com.br/certificate/hygor-rocha/javascript-programando-na-linguagem-web'
    }
  ];

  const handleCertificateClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const displayedExperiences = showAllExperiences ? workExperience : workExperience.slice(0, 2);

  return (
    <section id="experiencia" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experiência & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Formação</span>
          </h2>
          <p className="text-xl text-gray-600">
            Minha jornada acadêmica e profissional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
              Formação Acadêmica
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{edu.title}</h4>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="w-8 h-8 mr-3 text-blue-600" />
              Experiência Profissional
            </h3>
            
            <div className="space-y-6">
              {displayedExperiences.map((work, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{work.title}</h4>
                    <p className="text-blue-600 font-medium mb-2">{work.company}</p>
                    
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{work.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{work.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{work.description}</p>
                  </CardContent>
                </Card>
              ))}

              {workExperience.length > 2 && (
                <div className="flex justify-center mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    {showAllExperiences ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Ver menos
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Ver mais experiências
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Courses */}
        {courses.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Cursos e Certificações
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => handleCertificateClick(course.certificateUrl)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-gray-900 text-left flex-1">{course.name}</p>
                      <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-sm text-gray-600 text-left">{course.provider}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
