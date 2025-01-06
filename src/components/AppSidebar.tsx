import React from 'react';
import { Button } from "@/components/ui/button";
import { X, Home, Calendar, Settings, MessageSquare, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ isOpen, onClose }) => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <nav className="p-4 space-y-2">
        <Link to="/" className="block">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-5 w-5" />
            Home
          </Button>
        </Link>
        
        <Link to="/reservations" className="block">
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-2 h-5 w-5" />
            Reservations
          </Button>
        </Link>
        
        <Link to="/messages" className="block">
          <Button variant="ghost" className="w-full justify-start">
            <MessageSquare className="mr-2 h-5 w-5" />
            Messages
          </Button>
        </Link>
        
        <Link to="/settings" className="block">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </Link>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sign Out
        </Button>
      </nav>
    </div>
  );
};