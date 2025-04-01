
import React from 'react';
import AnimateInView from './AnimateInView';
import Container from './ui/container';
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  image: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, role, rating, image, delay }) => (
  <AnimateInView animation="fade-up" delay={delay}>
    <div className="glass-panel p-6 card-hover h-full flex flex-col">
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-pet-primary fill-pet-primary" : "text-gray-400"} 
          />
        ))}
      </div>
      <p className="text-white/80 mb-6 flex-1">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-white/20">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-medium text-white">{author}</h4>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </div>
    </div>
  </AnimateInView>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Este aplicativo tornou muito mais fácil agendar consultas de higienização para meus dois cães. Os lembretes são ótimos, e adoro poder especificar exatamente quais serviços cada animal precisa.",
      author: "Mariana Silva",
      role: "Dona de Cães",
      rating: 5,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&auto=format",
      delay: 100
    },
    {
      content: "Como alguém com uma agenda muito ocupada, este aplicativo tem sido um salvador. Poder marcar consultas e pagar através do aplicativo me economiza muito tempo.",
      author: "Rafael Oliveira",
      role: "Dono de Gato e Cão",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format",
      delay: 200
    },
    {
      content: "Meu gato persa exigente precisa de cuidados especiais de higienização, e este aplicativo facilita encontrar profissionais especializados nas necessidades dele. Os perfis detalhados dos pets são perfeitos!",
      author: "Júlia Santos",
      role: "Dona de Gato",
      rating: 4,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format",
      delay: 300
    },
  ];

  return (
    <section id="testimonials" className="pt-0 pb-24 bg-pet-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-pet-primary blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-pet-accent blur-3xl"></div>
      </div>
      
      <Container maxWidth="full" className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <AnimateInView animation="fade-up">
            <h2 className="section-title text-center">O Que Dizem os Donos de Pets</h2>
            <p className="section-subtitle text-center">
              Junte-se a milhares de clientes satisfeitos que simplificaram a rotina de cuidados com seus pets
            </p>
          </AnimateInView>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                image={testimonial.image}
                delay={testimonial.delay}
              />
            ))}
          </div>
          
          <AnimateInView animation="fade-up" delay={400} className="mt-16 text-center">
            <div className="glass-panel inline-block px-6 py-4 mx-auto">
              <p className="text-lg text-white/90 font-medium">
                <span className="text-pet-primary text-2xl font-bold mr-2">4.9</span> 
                Nota Média de <span className="text-white font-semibold">10.000+</span> Usuários
              </p>
            </div>
          </AnimateInView>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
