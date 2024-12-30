import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Building2, User } from "lucide-react";

const PortalSelection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    checkUserProfile();
  }, []);

  const checkUserProfile = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      setUserProfile(profile);

      // If user already has an account type, redirect them
      if (profile?.account_type === 'business') {
        navigate('/business');
        return;
      } else if (profile?.account_type === 'user') {
        navigate('/dashboard');
        return;
      }

      setLoading(false);
    } catch (error) {
      console.error('Error checking profile:', error);
      setLoading(false);
    }
  };

  const selectPortal = async (type: 'business' | 'user') => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ account_type: type })
        .eq('id', userProfile.id);

      if (error) throw error;

      navigate(type === 'business' ? '/business' : '/dashboard');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
            Welcome to Sojourn
          </h1>
          <p className="text-lg text-primary-700 mb-12">
            Please select how you would like to use our platform
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Button
              onClick={() => selectPortal('business')}
              size="lg"
              className="h-auto py-8 flex flex-col items-center gap-4"
            >
              <Building2 className="h-12 w-12" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Business Portal</h2>
                <p className="text-sm opacity-90">
                  Manage your services and appointments
                </p>
              </div>
            </Button>

            <Button
              onClick={() => selectPortal('user')}
              size="lg"
              variant="outline"
              className="h-auto py-8 flex flex-col items-center gap-4"
            >
              <User className="h-12 w-12" />
              <div>
                <h2 className="text-xl font-semibold mb-2">User Portal</h2>
                <p className="text-sm opacity-90">
                  Discover and book local services
                </p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalSelection;