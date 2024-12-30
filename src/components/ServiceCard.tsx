import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  imageUrl: string;
  businessName: string;
  id: string;
}

export const ServiceCard = ({
  id,
  title,
  description,
  price,
  rating,
  category,
  imageUrl,
  businessName,
}: ServiceCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBookNow = () => {
    // TODO: Implement proper booking flow
    toast({
      title: "Booking Service",
      description: "This feature is coming soon!",
    });
    // navigate(`/book/${id}`); // Uncomment when booking page is implemented
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-primary-500">{category}</Badge>
      </div>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{businessName}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-lg font-semibold text-primary-600">
          ${price.toFixed(2)}
        </span>
        <Button 
          variant="default" 
          className="bg-primary-600 hover:bg-primary-700"
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};