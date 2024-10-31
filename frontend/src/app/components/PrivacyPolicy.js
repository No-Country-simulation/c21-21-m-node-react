'use client';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section className="bg-customGray bg-opacity-60 p-2 md:p-6 lg:px-20 lg:pb-20  rounded-lg" id="privacy-policy">
            <div className="container mx-auto">
                <div className="text-center pt-2 pb-10 md:mb-4">
                    <h1 className="text-customH1 font-extrabold text-customWhite 
                        inline-block border-b-4 border-customGreen pb-2">
                        Políticas de privacidad
                    </h1>
                </div>
                <div className="bg-customWhite p-6 lg:p-10 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-customGreen">Introducción</h3>
                    <p className="pb-6 text-customBlack">
                        En BOOSTUP, nos tomamos muy en serio tu privacidad y la protección 
                        de tus datos personales. Esta Política de Privacidad describe cómo 
                        recopilamos, utilizamos y protegemos la información que proporcionas 
                        cuando utilizas nuestra plataforma de crowdfunding. Al usar nuestros 
                        servicios, aceptas los términos descritos a continuación.
                    </p>
                    <h3 className="text-xl font-bold mb-2 text-customGreen">Información que recopilamos</h3>
                    <p className="mb-4 text-customBlack">Recopilamos diferentes tipos de 
                        información cuando accedes y usas nuestra plataforma, incluyendo:</p>
                    <ul className="list-disc list-inside">
                        <li className='pb-4'>Información personal: Nombre, dirección de correo electrónico, 
                            número de teléfono, dirección postal, datos bancarios, e información 
                            necesaria para procesar pagos.</li>
                        <li className='pb-4'>Información de uso: Datos sobre cómo interactúas con nuestra 
                            plataforma, incluyendo direcciones IP, tipo de navegador, historial 
                            de navegación y otras actividades en la web.</li>
                        <li className='pb-4'>Información financiera: Datos relacionados con métodos de pago, 
                            como números de tarjetas de crédito/débito o cuentas de servicios de 
                            pago electrónico.</li>
                        <li>Cookies y tecnologías similares: Utilizamos cookies y tecnologías 
                            similares para recopilar información sobre tus interacciones con 
                            nuestra plataforma.</li>
                    </ul>
                    <h3 className="text-xl font-bold mb-2 pt-7 text-customGreen">Cómo usamos tu información</h3>
                    <p className="mb-4 text-customBlack">Usamos la información que recopilamos para:</p>
                    <ul className="list-disc list-inside">
                        <li className='pb-4'>Proporcionarte acceso a nuestra plataforma y 
                            gestionar tu cuenta.</li>
                        <li className='pb-4'>Procesar pagos e inversiones en campañas de crowdfunding.</li>
                        <li className='pb-4'>Enviar actualizaciones y notificaciones sobre las 
                            campañas y servicios que has utilizado.</li>
                        <li className='pb-4'>Mejorar nuestra plataforma mediante el análisis del 
                            comportamiento del usuario.</li>
                        <li>Cumplir con requisitos legales y reglamentarios.</li>
                    </ul>
                    <h3 className="text-xl font-bold mb-2 pt-7 text-customGreen">Compartir tu información</h3>
                    <p className="mb-4 text-customBlack">No vendemos, alquilamos ni intercambiamos tu información personal con terceros. Sin embargo, podemos compartir tu información en los siguientes casos:</p>
                    <ul className="list-disc list-inside">
                        <li className='pb-4'>Proveedores de servicios: Compartimos datos con proveedores externos 
                            que nos ayudan a operar la plataforma, procesar pagos o mejorar nuestros 
                            servicios.</li>
                        <li className='pb-4'>Obligaciones legales: Si es necesario para cumplir con la ley, 
                            proteger nuestros derechos, o en respuesta a solicitudes legales 
                            de autoridades gubernamentales.</li>
                        <li>Con startups y emprendedores: Si inviertes en una campaña, tu 
                            información puede ser compartida con los responsables de dicha 
                            campaña para facilitar el contacto y la entrega de recompensas.</li>
                    </ul>
                    <h3 className="text-xl font-bold mb-2 pt-7 text-customGreen">Protección de datos</h3>
                    <p className="mb-4 text-customBlack">Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger tu información personal frente a accesos no autorizados, alteración, divulgación o destrucción. Esto incluye:</p>
                    <ul className="list-disc list-inside">
                        <li className='pb-4'>Cifrado de los datos durante las transacciones (SSL).</li>
                        <li className='pb-4'>Accesos restringidos a la información personal dentro 
                            de nuestra plataforma.</li>
                        <li>Monitoreo continuo de nuestras medidas de seguridad.</li>
                    </ul>
                    <h3 className="text-xl font-bold mb-2 pt-7 text-customGreen">Derechos del usuario</h3>
                    <p className="mb-4 text-customBlack">Como usuario de nuestra plataforma, tienes derecho a:</p>
                    <ul className="list-disc list-inside">
                        <li className='pb-4'>Acceder: Solicitar información sobre los datos personales 
                            que almacenamos.</li>
                        <li className='pb-4'>Rectificar: Actualizar o corregir cualquier dato 
                            incorrecto o incompleto.</li>
                        <li className='pb-4'>Eliminar: Solicitar la eliminación de tus datos, 
                            siempre que no haya una obligación legal que requiera su retención.</li>
                        <li className='pb-4'>Restricción: Limitar el uso de tus datos personales 
                            en determinadas circunstancias.</li>
                        <li>Retirar el consentimiento: Si anteriormente diste tu consentimiento 
                            para el uso de tus datos, puedes retirarlo en cualquier momento.</li>
                    </ul>
                    <p className="mb-2 pt-7 text-customBlack">Para ejercer cualquiera de estos derechos, 
                        puedes contactarnos a través de contacto@boostup.com.</p>
                    <h3 className="text-xl pt-7 font-bold mb-2 text-customGreen">Uso de cookies</h3>
                    <p className="text-customBlack">
                        Utilizamos cookies para mejorar la experiencia del usuario en nuestra plataforma, 
                        incluyendo el análisis del comportamiento del usuario y la personalización de 
                        contenido. Puedes configurar tu navegador para que rechace algunas o todas las 
                        cookies, aunque esto podría afectar la funcionalidad de la plataforma.
                    </p>
                    <h3 className="text-xl pt-7 font-bold mb-2 text-customGreen">Retención de datos</h3>
                    <p className="text-customBlack">
                        Solo retenemos tus datos personales durante el tiempo que sea necesario para 
                        cumplir con los fines descritos en esta política o según lo requiera la ley. 
                        Una vez que ya no necesitemos tus datos, los eliminaremos de forma segura.
                    </p>
                    <h3 className="text-xl pt-7 font-bold mb-2 text-customGreen">Enlaces a sitios de terceros</h3>
                    <p className="text-customBlack">
                        Nuestra plataforma puede contener enlaces a sitios web externos. No somos 
                        responsables de las prácticas de privacidad o del contenido de dichos sitios 
                        de terceros. Te recomendamos que revises sus políticas de privacidad antes de 
                        proporcionar cualquier dato personal.
                    </p>

                    <h3 className="text-xl pt-7 font-bold mb-2 text-customGreen">Cambios en la política de privacidad</h3>
                    <p className="text-customBlack">
                        Nos reservamos el derecho de actualizar esta Política de Privacidad en 
                        cualquier momento. Notificaremos a los usuarios de cualquier cambio 
                        significativo publicando una nueva versión en nuestra plataforma o 
                        enviando un correo electrónico. Te recomendamos que revises esta política 
                        periódicamente para mantenerte informado sobre cómo protegemos tus datos.
                    </p>

                    <h3 className="text-xl pt-7 font-bold mb-2 text-customGreen">Contacto</h3>
                    <p className="text-customBlack">
                        Si tienes alguna pregunta o inquietud sobre nuestra Política de Privacidad, 
                        puedes comunicarte con nosotros en contacto@boostup.com.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
