
import React from 'react';
import { User } from 'lucide-react';
import ContactInfo from './contact/ContactInfo';
import SocialLinks from './contact/SocialLinks';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-gray-600">
            Vamos conversar sobre oportunidades e projetos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <User className="w-6 h-6 mr-3 text-blue-600" />
              Informações de Contato
            </h3>
            
            <ContactInfo />
            
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
