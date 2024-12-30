import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import PortalSelection from "./pages/PortalSelection";
import Account from "./pages/Account";
import Reservations from "./pages/Reservations";
import Settings from "./pages/Settings";
import RegisterBusiness from "./pages/RegisterBusiness";
import BusinessDashboard from "./pages/business/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal-selection" element={<PortalSelection />} />
          <Route path="/account" element={<Account />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register-business" element={<RegisterBusiness />} />
          <Route path="/b">
            <Route path="dashboard" element={<BusinessDashboard />} />
          </Route>
          <Route path="/dashboard" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;