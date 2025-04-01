
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import Container from './ui/container';
import AnimateInView from './AnimateInView';
import { useToast } from "@/components/ui/use-toast";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Por favor, insira um endereço de email válido');
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo seu contato. Responderemos em breve!",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-pet-gradient opacity-30"></div>
      
      <Container maxWidth="2xl" className="relative z-10">
        <AnimateInView animation="fade-up">
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
            Entre em Contato
          </h2>
          <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
            Tem alguma dúvida? Envie uma mensagem e entraremos em contato o mais breve possível
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimateInView animation="fade-up" delay={200} className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pet-primary/20 flex items-center justify-center text-pet-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Telefone</h4>
                  <p className="text-white/70">(11) 9999-8888</p>
                  <p className="text-white/70">(11) 3333-2222</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pet-primary/20 flex items-center justify-center text-pet-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-white/70">contato@rexpet.com.br</p>
                  <p className="text-white/70">suporte@rexpet.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pet-primary/20 flex items-center justify-center text-pet-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Endereço</h4>
                  <p className="text-white/70">Av. Paulista, 1000</p>
                  <p className="text-white/70">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="font-medium text-white mb-4">Horário de Funcionamento</h4>
              <div className="grid grid-cols-2 gap-2 text-white/70">
                <p>Segunda - Sexta:</p>
                <p>9:00 - 18:00</p>
                <p>Sábado:</p>
                <p>10:00 - 16:00</p>
                <p>Domingo:</p>
                <p>Fechado</p>
              </div>
            </div>
          </AnimateInView>
          
          {/* Contact Form */}
          <AnimateInView animation="fade-up" delay={300} className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Envie-nos uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/20 text-red-200 p-3 rounded-lg flex items-center">
                  <AlertCircle size={18} className="mr-2" />
                  {error}
                </div>
              )}
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pet-primary/50 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pet-primary/50 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pet-primary/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pet-primary/50 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </AnimateInView>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
