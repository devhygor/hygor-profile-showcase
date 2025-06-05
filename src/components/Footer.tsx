
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Hygor Rocha
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. 
              Sempre em busca de novos desafios e oportunidades de crescimento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#experiencia', label: 'Experiência' },
                { href: '#habilidades', label: 'Habilidades' },
                { href: '#projetos', label: 'Projetos' },
                { href: '#contato', label: 'Contato' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se Comigo</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/devhygor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/devhygor/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hygor.k92@gmail.com"
                className="p-3 bg-gray-700 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-gray-300 text-sm">
              📧 hygor.k92@gmail.com<br />
              📱 (61) 9 8159-2866<br />
              📍 Novo Gama - GO
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            © {currentYear} Hygor Rocha. Feito com{' '}
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            e muito código.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
