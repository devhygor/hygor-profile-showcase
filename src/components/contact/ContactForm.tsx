
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = formData.subject || 'Contato através do portfólio';
    const emailBody = `Olá Hygor,

Meu nome é ${formData.name} e entrei em contato através do seu portfólio.

${formData.message}

Atenciosamente,
${formData.name}
Email: ${formData.email}`;

    // Create mailto URL
    const mailtoUrl = `mailto:hygor.k92@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Show success toast
    toast({
      title: "Redirecionando para seu cliente de email",
      description: "Sua mensagem foi preparada e será aberta no seu aplicativo de email padrão.",
    });
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Seu nome completo"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="subject" className="text-gray-700 font-medium">Assunto</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Sobre o que você gostaria de conversar?"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-gray-700 font-medium">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Descreva sua ideia, projeto ou oportunidade..."
              required
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            Enviar Mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
