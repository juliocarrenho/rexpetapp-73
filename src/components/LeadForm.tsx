
import React, { useState } from 'react';
import { CheckCircle, Mail, User, AlertCircle } from 'lucide-react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';
import { useToast } from "@/components/ui/use-toast";

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill out all fields');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-pet-dark to-transparent opacity-50"></div>
      
      <Container maxWidth="full" className="relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="glass-panel p-8 md:p-12">
            <AnimateInView animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">
                Get Early Access
              </h2>
              <p className="text-white/80 text-center mb-8 max-w-lg mx-auto">
                Join our waitlist to be the first to know when our app launches in your area and receive exclusive offers.
              </p>
            </AnimateInView>
            
            {!submitted ? (
              <AnimateInView animation="fade-up" delay={200}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 text-red-200 p-3 rounded-lg flex items-center">
                      <AlertCircle size={18} className="mr-2" />
                      {error}
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pet-primary/50 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pet-primary/50 focus:border-transparent transition-all duration-300"
                      />
                    </div>
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
                        Processing...
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </button>
                  
                  <p className="text-sm text-white/60 text-center">
                    We'll never share your information with third parties.
                  </p>
                </form>
              </AnimateInView>
            ) : (
              <AnimateInView animation="scale-in" className="text-center py-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-pet-primary/20 flex items-center justify-center text-pet-primary">
                    <CheckCircle size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
                <p className="text-white/80 mb-6">
                  We've added you to our waitlist. Keep an eye on your inbox for updates!
                </p>
              </AnimateInView>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeadForm;
