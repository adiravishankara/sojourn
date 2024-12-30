import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Appointment {
  id: string;
  service: {
    name: string;
    business: {
      name: string;
    };
  };
  start_time: string;
  end_time: string;
  status: string;
}

const Reservations = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
  const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/login');
        return;
      }

      const now = new Date().toISOString();

      // Fetch upcoming appointments
      const { data: upcoming, error: upcomingError } = await supabase
        .from('appointments')
        .select(`
          id,
          start_time,
          end_time,
          status,
          service:services (
            name,
            business:businesses (
              name
            )
          )
        `)
        .eq('user_id', session.user.id)
        .gte('start_time', now)
        .order('start_time', { ascending: true });

      if (upcomingError) {
        toast({
          title: "Error",
          description: "Failed to load upcoming appointments",
          variant: "destructive",
        });
        return;
      }

      // Fetch past appointments
      const { data: past, error: pastError } = await supabase
        .from('appointments')
        .select(`
          id,
          start_time,
          end_time,
          status,
          service:services (
            name,
            business:businesses (
              name
            )
          )
        `)
        .eq('user_id', session.user.id)
        .lt('start_time', now)
        .order('start_time', { ascending: false });

      if (pastError) {
        toast({
          title: "Error",
          description: "Failed to load past appointments",
          variant: "destructive",
        });
        return;
      }

      setUpcomingAppointments(upcoming || []);
      setPastAppointments(past || []);
    };

    fetchAppointments();
  }, [navigate, toast]);

  const handleRebook = (appointment: Appointment) => {
    // TODO: Implement rebooking logic
    toast({
      title: "Coming Soon",
      description: "Rebooking functionality will be available soon!",
    });
  };

  const AppointmentCard = ({ appointment, showRebook = false }: { appointment: Appointment, showRebook?: boolean }) => (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{appointment.service?.name}</h3>
            <p className="text-sm text-gray-600">{appointment.service?.business?.name}</p>
            <p className="text-sm text-gray-600">
              {new Date(appointment.start_time).toLocaleDateString()} at{' '}
              {new Date(appointment.start_time).toLocaleTimeString()}
            </p>
            <p className="text-sm text-gray-600">Status: {appointment.status}</p>
          </div>
          {showRebook && (
            <Button variant="outline" onClick={() => handleRebook(appointment)}>
              Rebook
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="upcoming" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Reservations</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length === 0 ? (
                  <p className="text-center text-gray-500">No upcoming reservations</p>
                ) : (
                  upcomingAppointments.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>Past Reservations</CardTitle>
              </CardHeader>
              <CardContent>
                {pastAppointments.length === 0 ? (
                  <p className="text-center text-gray-500">No past reservations</p>
                ) : (
                  pastAppointments.map((appointment) => (
                    <AppointmentCard 
                      key={appointment.id} 
                      appointment={appointment}
                      showRebook={true}
                    />
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Reservations;