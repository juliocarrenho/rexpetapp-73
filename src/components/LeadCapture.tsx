
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md mx-auto md:mx-0">
      <div className="flex items-center">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={16} />
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-l-lg py-2.5 pl-10 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-pet-primary focus:border-pet-primary transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-pet-primary hover:bg-pet-light text-white font-medium py-2.5 px-4 rounded-r-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pet-primary/50"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Join"
          )}
        </button>
      </div>
      <p className="text-xs text-white/60 mt-2">
        We'll never share your information with third parties.
      </p>
    </form>
  );
};

export default LeadCapture;
