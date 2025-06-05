
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Hygor Melo
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/devhygor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
            >
              <Github className="w-5 h-5 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/devhygor/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="mailto:hygor.k92@gmail.com"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 text-gray-700 hover:text-blue-600" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://github.com/devhygor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-gray-700 hover:text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/devhygor/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-600" />
              </a>
              <a
                href="mailto:hygor.k92@gmail.com"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-gray-700 hover:text-blue-600" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
