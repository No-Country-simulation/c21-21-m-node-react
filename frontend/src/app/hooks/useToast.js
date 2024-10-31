"use client"
import { useState } from 'react';

const useToast = () => {
    const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

    const showToast = (message, type) => {
        setToast({ message, type, isVisible: true });
        setTimeout(() => setToast({ message: '', type: '', isVisible: false }), 3000);
    };

    return { toast, setToast, showToast };
};

export default useToast;
