"use client"
import { useState } from "react";
import LoaderButton from "./loaders/LoaderButton";

const ActionConfirmation = ({ text, action, bgColor, onConfirm }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleConfirm = async () => {
        setIsLoading(true);
        try {
            await onConfirm(); 
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div>
            <p className="pb-4">{text}</p>
            <LoaderButton 
                isLoading={isLoading}
                onClick={handleConfirm}
                className={`w-full text-white ${bgColor} font-bold px-6 py-3 
                rounded-full`}>
                {action}
            </LoaderButton>
        </div>
    );
};

export default ActionConfirmation
