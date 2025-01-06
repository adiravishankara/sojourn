import React from 'react';

const AppSidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="border border-gray-300 p-4">
        <button onClick={onClose}>Close</button>
        {/* Sidebar content */}
      </div>
    </div>
  );
};

export default AppSidebar;