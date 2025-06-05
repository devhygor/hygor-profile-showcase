
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Função para sanitizar entrada e evitar injeção de código
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove < e >
      .trim()
      .substring(0, 500); // Limita o tamanho
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sanitiza todos os campos
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message)
    };

    // Validação básica
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
      toast({
        title: "Erro de validação",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Enviando email...", sanitizedData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: sanitizedData
      });

      if (error) {
        console.error("Erro ao enviar email:", error);
        throw error;
      }

      console.log("Email enviado com sucesso:", data);

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Sua mensagem foi enviada. Retornarei o contato em breve!",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error: any) {
      console.error("Erro completo:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente pelo email hygor.k92@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Limita o tamanho do input em tempo real
    const maxLengths = {
      name: 100,
      email: 100,
      subject: 150,
      message: 1000
    };
    
    const maxLength = maxLengths[name as keyof typeof maxLengths] || 500;
    const truncatedValue = value.substring(0, maxLength);
    
    setFormData({
      ...formData,
      [name]: truncatedValue
    });
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">Nome *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Seu nome completo"
                required
                maxLength={100}
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="seu@email.com"
                required
                maxLength={100}
                disabled={isSubmitting}
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
              maxLength={150}
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-gray-700 font-medium">Mensagem *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Descreva sua ideia, projeto ou oportunidade..."
              required
              maxLength={1000}
              disabled={isSubmitting}
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.message.length}/1000 caracteres
            </p>
          </div>
          
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
