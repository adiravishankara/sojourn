import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const handleDateSelect = async (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
      const { data: availabilityData } = await supabase
        .from('service_availability')
        .select('start_time, end_time')
        .eq('service_id', id)
        .eq('day_of_week', dayOfWeek)
        .single();

      if (availabilityData) {
        const times: string[] = [];
        const start = new Date(`2000-01-01 ${availabilityData.start_time}`);
        const end = new Date(`2000-01-01 ${availabilityData.end_time}`);
        
        while (start < end) {
          times.push(start.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
          }));
          start.setHours(start.getHours() + 1);
        }
        
        setAvailableTimes(times);
      }
    }
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Error",
        description: "Please select both date and time",
        variant: "destructive",
      });
      return;
    }

    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast({
        title: "Error",
        description: "Please login to book an appointment",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    const startTime = new Date(selectedDate);
    const [hours, minutes] = selectedTime.split(':');
    startTime.setHours(parseInt(hours), parseInt(minutes));

    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 1);

    const { error } = await supabase
      .from('appointments')
      .insert({
        service_id: id,
        user_id: session.user.id,
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
        status: 'pending'
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to book appointment",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Appointment booked successfully!",
    });
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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="bg-primary-600 hover:bg-primary-700">
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Book Appointment</DialogTitle>
              <DialogDescription>
                Select a date and time for your appointment
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={(date) => 
                  date < new Date() || 
                  date.getDay() === 0 || 
                  date.getDay() === 6
                }
              />
              {selectedDate && availableTimes.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              )}
              <Button onClick={handleBooking}>
                Confirm Booking
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};