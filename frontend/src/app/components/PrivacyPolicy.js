'use client';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section className="bg-customGray bg-opacity-60 p-12 rounded-lg" id="privacy-policy">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-customWhite sm:text-4xl inline-block border-b-4 border-customGreen pb-2">Políticas y Privacidad</h2>
                </div>
                <div className="bg-customWhite p-8 rounded-lg shadow-lg">
                    <p className="mb-2 text-customBlack">1. Tu privacidad es importante para nosotros...</p>
                    <p className="mb-2 text-customBlack">2. Información que recopilamos...</p>
                    {/* Agrega más secciones de la política de privacidad */}
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
