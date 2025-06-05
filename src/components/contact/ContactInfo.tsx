
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hygor.k92@gmail.com',
      action: () => window.open('mailto:hygor.k92@gmail.com', '_self')
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(61) 9 8159-2866',
      action: () => window.open('tel:+5561981592866', '_self')
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Novo Gama - GO',
      action: () => window.open('https://maps.google.com/?q=Novo+Gama+GO', '_blank', 'noopener,noreferrer')
    }
  ];

  return (
    <div className="space-y-6">
      {contactInfo.map((info, index) => (
        <Card
          key={index}
          className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:transform hover:scale-[1.02]"
          onClick={info.action}
        >
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <info.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{info.title}</h4>
              <p className="text-gray-600">{info.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
