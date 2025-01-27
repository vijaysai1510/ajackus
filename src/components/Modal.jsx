import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-100 to-purple-300 bg-opacity-50 flex items-center justify-center z-50">
      
      <div className="relative max-h-full w-full max-w-md overflow-auto bg-gradient-to-br from-purple-100 to-purple-300 bg-opacity-50 rounded-lg shadow-lg sm:max-h-none sm:w-none sm:max-w-none sm:overflow-none  sm:rounded-none sm:shadow-none">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
