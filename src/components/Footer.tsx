
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import Container from './ui/container';
import AnimateInView from './AnimateInView';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="download" className="bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[30%] left-[10%] w-72 h-72 rounded-full bg-pet-primary blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-pet-accent blur-3xl"></div>
      </div>
      
      <div className="border-t border-white/10 py-16 relative z-10">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <AnimateInView animation="fade-up" delay={100}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  <span className="text-pet-primary">Rex</span>
                  <span className="text-white"> Pet</span>
                </h3>
                <p className="text-white/70 mb-6">
                  Professional pet grooming services at your fingertips. Schedule appointments, find groomers, and keep your pets looking their best.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-pet-primary transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-pet-primary transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-pet-primary transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-pet-primary transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={200}>
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={300}>
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin size={18} className="text-pet-primary mr-3 mt-1" />
                    <span className="text-white/70">123 Pet Street, San Francisco, CA 94158</span>
                  </li>
                  <li className="flex items-center">
                    <Phone size={18} className="text-pet-primary mr-3" />
                    <span className="text-white/70">(123) 456-7890</span>
                  </li>
                  <li className="flex items-center">
                    <Mail size={18} className="text-pet-primary mr-3" />
                    <span className="text-white/70">info@rexpet.com</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay={400}>
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Download App</h4>
                <p className="text-white/70 mb-6">Get our app for free on all platforms</p>
                <div className="space-y-4">
                  <a href="#" className="flex items-center justify-center bg-black border border-white/20 rounded-xl px-6 py-3 hover:bg-white/5 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" className="text-white mr-3">
                      <path d="M17.0467 11.5152C17.0677 10.2549 17.6344 9.01 18.641 8.12C17.6319 6.7458 16.0778 5.91223 14.4577 5.86C12.7467 5.684 11.1177 6.8658 10.2363 6.8658C9.33547 6.8658 8.01729 5.87854 6.58954 5.90788C4.68264 5.9666 2.94196 7.06298 2.00505 8.771C0.0502119 12.2843 1.54382 17.5484 3.3991 20.523C4.31733 21.9707 5.38636 23.5807 6.79636 23.5307C8.17574 23.4758 8.71454 22.6598 10.3732 22.6598C12.0127 22.6598 12.5228 23.5307 13.9696 23.5023C15.46 23.4758 16.3784 22.0423 17.2695 20.5836C18.3575 18.8588 18.7992 17.1764 18.82 17.1057C18.791 17.0941 15.932 15.9209 15.9 12.5641C15.8719 9.76032 18.1373 8.36918 18.2636 8.28032C16.9834 6.42598 15.0264 6.20528 14.4324 6.15694C12.7556 6.01958 11.1884 7.052 10.3229 7.052C9.4679 7.052 8.14933 6.13046 6.74013 6.13046C6.4544 6.13115 6.16931 6.16198 5.88812 6.22254C4.21014 6.63711 2.82959 8.0051 2.14812 9.83327C1.05757 12.692 1.76481 16.9434 3.94359 20.552M11.9286 5.03374C12.6475 4.1866 13.0427 3.11244 13.0609 2C12.0217 2.04487 11.0354 2.4713 10.3031 3.19626C9.58239 3.89695 9.10349 4.89402 9.0312 5.967C10.0824 5.9946 11.1099 5.61375 11.9286 5.03374Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/80">Download on the</div>
                      <div className="text-sm font-medium text-white">App Store</div>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center justify-center bg-black border border-white/20 rounded-xl px-6 py-3 hover:bg-white/5 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" className="text-white mr-3">
                      <path d="M12 20.5L14.6964 17.7864C16.6627 16.186 18 13.7042 18 11V6.37868C18 5.84828 17.7247 5.35221 17.2678 5.06493L13.2678 2.61493C12.4911 2.13373 11.5089 2.13373 10.7322 2.61493L6.73223 5.06493C6.27528 5.35221 6 5.84828 6 6.37868V11C6 13.7042 7.33731 16.186 9.30358 17.7864L12 20.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                      <path d="M11 12V8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                      <path d="M15 12V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                      <path d="M7 12V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/80">GET IT ON</div>
                      <div className="text-sm font-medium text-white">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </AnimateInView>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Rex Pet. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
