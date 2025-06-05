
import React from 'react';
import { Code, Database, Globe, Wrench, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Linguagens de Programação',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'PHP', level: 70 },
        { name: 'Python', level: 65 }
      ]
    },
    {
      icon: Database,
      title: 'Frameworks & Bibliotecas',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'jQuery', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 }
      ]
    },
    {
      icon: Globe,
      title: 'Tecnologias Web',
      skills: [
        { name: 'Responsive Design', level: 90 },
        { name: 'API REST', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'WordPress', level: 75 },
        { name: 'Vite', level: 80 },
        { name: 'SEO', level: 70 }
      ]
    },
    {
      icon: Wrench,
      title: 'Ferramentas & Software',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 70 },
        { name: 'Photoshop', level: 75 },
        { name: 'Postman', level: 80 }
      ]
    }
  ];

  const languages = [
    { name: 'Português', level: 100, flag: '🇧🇷' },
    { name: 'Inglês', level: 60, flag: '🇺🇸' },
    { name: 'Espanhol', level: 40, flag: '🇪🇸' }
  ];

  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Habilidades & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Competências</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 mr-3 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-8">
              <Languages className="w-8 h-8 mr-3 text-white" />
              <h3 className="text-2xl font-bold text-white">Idiomas</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{language.flag}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{language.name}</h4>
                  
                  <div className="w-full bg-blue-400/30 rounded-full h-3 mb-2">
                    <div
                      className="bg-white h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                  
                  <span className="text-blue-100 text-sm">
                    {language.level === 100 ? 'Nativo' : 
                     language.level >= 80 ? 'Avançado' : 
                     language.level >= 60 ? 'Intermediário' : 'Básico'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
