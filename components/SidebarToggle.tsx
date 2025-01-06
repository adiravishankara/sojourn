import React from 'react';

const SidebarToggle: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    return (
        <div className="absolute right-4 top-4 z-10 cursor-pointer" onClick={onToggle}>
            {/* Your icon for the toggle */}
            <span>☰</span>
        </div>
    );
};

export default SidebarToggle; 