import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <img
          src="/logo.svg"
          alt="Sojourn Logo"
          className="w-32 h-32 mb-8 animate-fade-in"
        />
        
        <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 animate-fade-in">
          Your local services at your fingertips
        </h1>
        
        <p className="text-xl text-primary-700 mb-12 max-w-2xl animate-fade-in">
          Discover and book trusted local service providers in your area. From home maintenance to personal care, we've got you covered.
        </p>
        
        <div className="space-x-4 animate-fade-in">
          <Button
            onClick={() => navigate("/login")}
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8"
          >
            Get Started
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/login")}
            className="border-primary-600 text-primary-600 hover:bg-primary-50"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;