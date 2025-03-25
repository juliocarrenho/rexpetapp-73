
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pet-primary/90 to-black">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
          <h1 className="text-5xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-white/80 mb-6">Oops! Page not found</p>
          <p className="text-white/70 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-pet-primary text-white px-6 py-3 rounded-full hover:bg-pet-primary/80 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
