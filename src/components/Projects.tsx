import React from 'react';
import { ExternalLink, Github, Code, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Meu Currículo',
      description: 'Currículo digital desenvolvido com HTML, CSS e JavaScript puro, apresentando minhas informações pessoais e profissionais de forma moderna.',
      image: '/placeholder.svg',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/devhygor/meu-curriculo',
      live: 'https://devhygor.github.io/meu-curriculo/',
      stars: 1,
      featured: true
    },
    {
      title: 'Portfólio/Currículo Moderno',
      description: 'Nova versão do meu portfólio desenvolvida com React, TypeScript e Tailwind CSS, com design responsivo e interativo.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/devhygor/portfolio',
      live: 'https://devhygor.com',
      stars: 0,
      featured: true
    },
    {
      title: 'Projetos de Estudo',
      description: 'Diversos projetos desenvolvidos durante meus estudos, incluindo exercícios de algoritmos e pequenas aplicações web.',
      image: '/placeholder.svg',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
      github: 'https://github.com/devhygor',
      live: '#',
      stars: 0,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projetos" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meus <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Alguns dos projetos que desenvolvi
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-500" />
            Projetos em Destaque
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02] overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <Code className="w-16 h-16 text-blue-600 opacity-50" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{project.stars}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    
                    {project.live !== '#' && (
                      <Button
                        size="sm"
                        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Outros Projetos</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Código
                      </Button>
                      
                      {project.live !== '#' && (
                        <Button
                          size="sm"
                          className="flex-1 text-xs bg-blue-600 hover:bg-blue-700"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Veja Mais no GitHub</h3>
              <p className="text-gray-300 mb-6">
                Explore todos os meus projetos e contribuições open source
              </p>
              
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-medium"
                onClick={() => window.open('https://github.com/devhygor', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                Ver Perfil no GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
