
import React from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/devhygor',
      color: 'hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/devhygor/',
      color: 'hover:bg-blue-600'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/5561981592866',
      color: 'hover:bg-green-600'
    }
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h4>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            className={`p-4 border-2 border-gray-200 hover:border-transparent hover:text-white transition-all duration-300 ${social.color}`}
            onClick={() => window.open(social.url, '_blank')}
          >
            <social.icon className="w-6 h-6" />
            <span className="sr-only">{social.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
