import { Link } from "react-router-dom";
import {
  User,
  Calendar,
  Heart,
  Gift,
  CreditCard,
  Settings,
  Building2,
  Building,
  LogOut,
  Users,
  Bell,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function AppSidebar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <Sidebar className="fixed right-0">
      <SidebarContent>
        {/* Personal Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Personal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/account">
                    <User className="mr-2" />
                    <span>Account</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/reservations">
                    <Calendar className="mr-2" />
                    <span>Reservations</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/favorites">
                    <Heart className="mr-2" />
                    <span>Favorites</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/coupons">
                    <Gift className="mr-2" />
                    <span>Coupons</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/payment">
                    <CreditCard className="mr-2" />
                    <span>Payment</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/settings">
                    <Settings className="mr-2" />
                    <span>Settings</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/invite">
                    <Users className="mr-2" />
                    <span>Invite a Friend</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Business Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Business Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/register-business">
                    <Building2 className="mr-2" />
                    <span>Register a Business</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/b/dashboard">
                    <Building className="mr-2" />
                    <span>My Businesses</span>
                  </Link>
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start" onClick={handleSignOut}>
                  <LogOut className="mr-2" />
                  <span>Logout</span>
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}