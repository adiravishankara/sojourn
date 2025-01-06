import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { MessageSquare, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchReservations = async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select('*, services(name)')
        .eq('user_id', supabase.auth.user()?.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch reservations",
          variant: "destructive",
        });
      } else {
        setReservations(data);
      }
    };

    fetchReservations();
  }, [toast]);

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('appointments')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete reservation",
        variant: "destructive",
      });
    } else {
      setReservations(reservations.filter(reservation => reservation.id !== id));
      toast({
        title: "Success",
        description: "Reservation deleted successfully",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">My Reservations</h1>
        <div className="space-y-4">
          {reservations.map(reservation => (
            <div key={reservation.id} className="flex items-center justify-between p-4 bg-white shadow rounded">
              <div>
                <h2 className="font-semibold">{reservation.services.name}</h2>
                <p className="text-sm text-gray-500">
                  {format(new Date(reservation.start_time), 'MMMM d, yyyy h:mm a')}
                </p>
                <Badge className="mt-2">{reservation.status}</Badge>
              </div>
              <Button variant="outline" onClick={() => handleDelete(reservation.id)}>
                <Trash2 className="mr-2" />
                Delete
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reservations;
