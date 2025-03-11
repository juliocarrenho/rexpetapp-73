
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
      content: "This app has made scheduling grooming appointments for my two dogs so much easier. The reminders are great, and I love being able to specify exactly what services each pet needs.",
      author: "Sarah Johnson",
      role: "Dog Owner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format",
      delay: 100
    },
    {
      content: "As someone with a very busy schedule, this app has been a lifesaver. Being able to book appointments and pay through the app saves me so much time.",
      author: "Michael Chen",
      role: "Cat & Dog Owner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format",
      delay: 200
    },
    {
      content: "My picky Persian cat needs special grooming care, and this app makes it easy to find groomers who specialize in her needs. The detailed pet profiles are perfect!",
      author: "Emily Rodriguez",
      role: "Cat Owner",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format",
      delay: 300
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-pet-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-pet-primary blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-pet-accent blur-3xl"></div>
      </div>
      
      <Container maxWidth="2xl" className="relative z-10">
        <AnimateInView animation="fade-up">
          <h2 className="section-title text-center">What Pet Owners Say</h2>
          <p className="section-subtitle text-center">
            Join thousands of happy customers who have simplified their pet grooming routine
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
              Average Rating from <span className="text-white font-semibold">10,000+</span> Users
            </p>
          </div>
        </AnimateInView>
      </Container>
    </section>
  );
};

export default Testimonials;
