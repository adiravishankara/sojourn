import React from 'react';

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="border border-gray-300 p-4">
                {/* Sidebar content */}
                <button onClick={onClose}>Close</button>
                {/* Other items */}
            </div>
        </div>
    );
};

export default Sidebar; 