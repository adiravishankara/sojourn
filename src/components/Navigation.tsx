import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare, Bell, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export const Navigation = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (!session && event === 'SIGNED_OUT') {
        navigate('/login');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <SidebarProvider defaultCollapsed={true}>
      <div className="min-h-screen flex w-full">
        <div className="flex-1">
          <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl font-bold text-primary-600">Sojourn</h1>
                </div>
                
                <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search services..."
                      className="w-full pl-10"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {user ? (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                      >
                        <Bell className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                      >
                        <MessageSquare className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                      <SidebarTrigger className="order-last" />
                    </>
                  ) : (
                    <Button 
                      variant="default" 
                      className="bg-primary-600 hover:bg-primary-700"
                      onClick={handleSignIn}
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="md:hidden py-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search services..."
                    className="w-full pl-10"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
        {user && <AppSidebar />}
      </div>
    </SidebarProvider>
  );
};