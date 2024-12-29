import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Grid, Map } from "lucide-react";

// Mock data for initial development
const services = [
  {
    id: 1,
    title: "Professional Photography Session",
    description: "Capture your special moments with our experienced photographers. Perfect for events, portraits, and commercial shoots.",
    price: 199.99,
    rating: 4.8,
    category: "Photography",
    imageUrl: "/placeholder.svg",
    businessName: "Creative Lens Studio"
  },
  {
    id: 2,
    title: "Home Cleaning Service",
    description: "Comprehensive home cleaning service including deep cleaning, sanitization, and organization.",
    price: 89.99,
    rating: 4.6,
    category: "Cleaning",
    imageUrl: "/placeholder.svg",
    businessName: "Sparkle Home Services"
  },
  {
    id: 3,
    title: "Personal Training Session",
    description: "One-on-one fitness training tailored to your goals with certified personal trainers.",
    price: 75.00,
    rating: 4.9,
    category: "Fitness",
    imageUrl: "/placeholder.svg",
    businessName: "Elite Fitness"
  },
  {
    id: 4,
    title: "Mobile Car Detailing",
    description: "Professional car detailing service that comes to your location. Interior and exterior cleaning available.",
    price: 149.99,
    rating: 4.7,
    category: "Automotive",
    imageUrl: "/placeholder.svg",
    businessName: "Premium Auto Care"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Popular Services</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Map className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;