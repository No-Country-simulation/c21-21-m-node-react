'use client';
import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const generalFaqs = [
        { question: '¿Qué métodos de pago aceptan?', answer: 'Aceptamos pagos mediante tarjetas de crédito, transferencias bancarias y servicios de pago en línea como Mercado Pago.' },
        { question: '¿Qué garantías ofrecen a los inversores?', answer: 'Si bien realizamos una revisión previa de cada startup, no garantizamos el éxito de ningún proyecto. Te recomendamos que investigues a fondo antes de invertir.' },
        { question: '¿Cómo protege la plataforma mis datos personales?', answer: 'Cumplimos con estrictas políticas de privacidad y seguridad para garantizar que tus datos estén protegidos en todo momento. Usamos cifrado SSL para todas las transacciones y datos sensibles.' },
        { question: '¿Puedo retirar mi inversión después de haberla realizado?', answer: 'No es posible retirar una inversión una vez que se ha confirmado. Te sugerimos revisar cuidadosamente los términos y condiciones de la campaña antes de invertir.' },
        { question: '¿Cómo puedo contactar al soporte en caso de tener un problema?', answer: 'Puedes contactarnos enviarnos un correo a contacto@boostup.com. Nuestro equipo te responderá lo antes posible.' }
    ];

    const startupFaqs = [
        { question: '¿Cómo puedo lanzar mi campaña en la plataforma?', answer: 'Para lanzar una campaña, primero debes registrarte como usuario, completar tu perfil de startup y luego seguir el proceso de creación de campaña. Proporciona una descripción clara de tu proyecto, establece un objetivo de recaudación y define las recompensas para los inversores.' },
        { question: '¿Cuánto tiempo dura una campaña de crowdfunding?', answer: 'Las campañas generalmente duran entre 30 y 60 días, aunque puedes seleccionar la duración que mejor se adapte a las necesidades de tu startup.' },
        { question: '¿Qué tipo de startups pueden usar esta plataforma?', answer: 'Aceptamos startups de diversas industrias, siempre que cumplan con nuestras políticas de ética y transparencia. Revisamos cada solicitud para asegurar que cumpla con los criterios antes de ser aprobada.' },
        { question: '¿Qué sucede si no alcanzo mi objetivo de financiamiento?', answer: 'Si no alcanzas tu objetivo, dependerá del tipo de campaña que hayas elegido. En una campaña "todo o nada", no recibirás los fondos si no alcanzas el objetivo. En una campaña "mantener lo recaudado", podrás quedarte con lo que hayas recaudado.' },
        { question: '¿Cuáles son las tarifas para usar la plataforma?', answer: 'La plataforma cobra un pequeño porcentaje del total recaudado solo si la campaña es exitosa. Las tarifas exactas se detallan en nuestra página de precios.' }
    ];

    const investorFaqs = [
        { question: '¿Cómo puedo invertir en una startup?', answer: 'Solo necesitas crear una cuenta, explorar las campañas activas y elegir la startup en la que deseas invertir. Puedes hacer aportes mediante varios métodos de pago disponibles.' },
        { question: '¿Qué tipo de retornos puedo esperar al invertir?', answer: 'Los retornos varían según la startup y las condiciones de la inversión. Algunas ofrecen recompensas como productos, mientras que otras pueden ofrecer acciones o participación en ganancias.' },
        { question: '¿Es seguro invertir en startups a través de esta plataforma?', answer: 'Sí, tomamos medidas de seguridad para proteger tus datos y transacciones. Además, cada startup es revisada antes de ser aceptada en la plataforma. Sin embargo, como con cualquier inversión, siempre existe un riesgo, y te recomendamos hacer una investigación adecuada.' },
        { question: '¿Qué pasa si una startup no alcanza su objetivo de financiamiento?', answer: 'Si la startup no alcanza su objetivo en una campaña "todo o nada", se te reembolsará automáticamente. En campañas "mantener lo recaudado", el dinero recaudado se entrega a la startup, y se aplicarán las condiciones acordadas.' },
        { question: '¿Cómo puedo seguir el progreso de una startup en la que he invertido?', answer: 'Una vez que inviertes, puedes seguir el progreso a través de actualizaciones que la startup publique en la plataforma. También recibirás notificaciones sobre avances importantes.' }
    ];

    return (
        <section className="bg-customGray p-2 md:p-6 lg:px-20 lg:pb-20  rounded-lg" id="FAQ">
            <div className="container mx-auto">
                <div className="text-center pt-2 pb-10 md:mb-4">
                    <h1 className="text-customH1 font-extrabold text-customWhite 
                        inline-block border-b-4 border-customGreen pb-2">
                        Preguntas frecuentes
                    </h1>
                </div>
                <div className="bg-customWhite p-6 lg:p-10 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-customGreen mb-4">Generales</h3>
                    {
                        generalFaqs.map((faq, index) => (
                            <div key={index} className="mb-6">
                                <button
                                    className="flex justify-between w-full font-semibold 
                                    text-customGray hover:text-customGreen text-left" 
                                    onClick={() => toggleFAQ(index)}>
                                    <span className="text-left">{faq.question}</span> 
                                    <span>
                                        {
                                            activeIndex === index ? 
                                                <FaChevronUp /> 
                                            : <FaChevronDown />
                                        }
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="lg:pl-2 mt-2 text-customBlack">{faq.answer}</p>
                                </div>
                            </div>)
                        )
                    }
                </div>
                <div className="bg-customWhite p-8 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-customGreen mb-4">Startups</h3>
                    {
                        startupFaqs.map((faq, index) => (
                            <div key={index + generalFaqs.length} className="mb-4">
                                <button
                                    className="flex justify-between w-full font-semibold 
                                    text-customGray hover:text-customGreen text-left" 
                                    onClick={() => toggleFAQ(index + generalFaqs.length)}>
                                    <span className="text-left">{faq.question}</span>
                                    <span>
                                        {
                                            activeIndex === index + generalFaqs.length ? 
                                                <FaChevronUp /> 
                                            : <FaChevronDown />
                                        }
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out 
                                        overflow-hidden ${activeIndex === index + generalFaqs.length ? 
                                        'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="lg:pl-2 mt-2 text-customBlack">{faq.answer}</p>
                                </div>
                            </div>)
                        )
                    }
                </div>
                <div className="bg-customWhite p-8 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-customGreen mb-4">Inversores</h3>
                    {
                        investorFaqs.map((faq, index) => (
                            <div key={index + generalFaqs.length + startupFaqs.length} className="mb-4">
                                <button
                                    className="flex justify-between w-full font-semibold 
                                    text-customGray hover:text-customGreen text-left" 
                                    onClick={() => toggleFAQ(index + generalFaqs.length + 
                                    startupFaqs.length)}>
                                    <span className="text-left">{faq.question}</span>
                                    <span>
                                        {
                                            activeIndex === index + generalFaqs.length + startupFaqs.length ? 
                                                <FaChevronUp /> 
                                            : <FaChevronDown />
                                        }
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden 
                                        ${activeIndex === index + generalFaqs.length + 
                                            startupFaqs.length ? 'max-h-96 opacity-100' 
                                            : 'max-h-0 opacity-0'}`}>
                                    <p className="lg:pl-2 mt-2 text-customBlack">{faq.answer}</p>
                                </div>
                            </div>)
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default FAQ;
