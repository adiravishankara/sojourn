import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          navigate("/");
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6 bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to Sojourn</h1>
          <p className="text-gray-500 mt-2">Sign in to continue</p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: 'rgb(37 99 235)',
                  brandAccent: 'rgb(29 78 216)',
                }
              }
            },
            style: {
              message: {
                color: 'rgb(220 38 38)',
                marginTop: '8px',
                fontSize: '0.875rem'
              }
            }
          }}
          providers={["google"]}
          redirectTo={window.location.origin}
        />
      </Card>
    </div>
  );
};

export default Login;