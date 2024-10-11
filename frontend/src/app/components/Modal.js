import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-1">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-4xl mx-auto max-h-[80vh] overflow-hidden">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold">
                    &times;
                </button>
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <hr className="border-gray-300 mb-4" />
                <div className="overflow-y-auto h-[60vh]">{children}</div> 
            </div>
        </div>
    );
};

export default Modal;
