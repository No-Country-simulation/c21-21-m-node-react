'use client';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section className="bg-customGray bg-opacity-60 p-12 rounded-lg" id="privacy-policy">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-customWhite sm:text-4xl inline-block border-b-4 border-customGreen pb-2">
                        Políticas de privacidad
                    </h2>
                </div>
                <div className="bg-customWhite p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-customGreen">Introducción</h3>
                    <p className="mb-4 text-customBlack">
                        En BOOSTUP, nos tomamos muy en serio tu privacidad y la protección de tus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información que proporcionas cuando utilizas nuestra plataforma de crowdfunding. Al usar nuestros servicios, aceptas los términos descritos a continuación.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Información que recopilamos</h3>
                    <p className="mb-4 text-customBlack">
                        Recopilamos diferentes tipos de información cuando accedes y usas nuestra plataforma, incluyendo:
                        <ul className="list-disc list-inside ml-4">
                            <li>Información personal: Nombre, dirección de correo electrónico, número de teléfono, dirección postal, datos bancarios, e información necesaria para procesar pagos.</li>
                            <li>Información de uso: Datos sobre cómo interactúas con nuestra plataforma, incluyendo direcciones IP, tipo de navegador, historial de navegación y otras actividades en la web.</li>
                            <li>Información financiera: Datos relacionados con métodos de pago, como números de tarjetas de crédito/débito o cuentas de servicios de pago electrónico.</li>
                            <li>Cookies y tecnologías similares: Utilizamos cookies y tecnologías similares para recopilar información sobre tus interacciones con nuestra plataforma.</li>
                        </ul>
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Cómo usamos tu información</h3>
                    <p className="mb-4 text-customBlack">
                        Usamos la información que recopilamos para:
                        <ul className="list-disc list-inside ml-4">
                            <li>Proporcionarte acceso a nuestra plataforma y gestionar tu cuenta.</li>
                            <li>Procesar pagos e inversiones en campañas de crowdfunding.</li>
                            <li>Enviar actualizaciones y notificaciones sobre las campañas y servicios que has utilizado.</li>
                            <li>Mejorar nuestra plataforma mediante el análisis del comportamiento del usuario.</li>
                            <li>Cumplir con requisitos legales y reglamentarios.</li>
                        </ul>
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Compartir tu información</h3>
                    <p className="mb-4 text-customBlack">
                        No vendemos, alquilamos ni intercambiamos tu información personal con terceros. Sin embargo, podemos compartir tu información en los siguientes casos:
                        <ul className="list-disc list-inside ml-4">
                            <li>Proveedores de servicios: Compartimos datos con proveedores externos que nos ayudan a operar la plataforma, procesar pagos o mejorar nuestros servicios.</li>
                            <li>Obligaciones legales: Si es necesario para cumplir con la ley, proteger nuestros derechos, o en respuesta a solicitudes legales de autoridades gubernamentales.</li>
                            <li>Con startups y emprendedores: Si inviertes en una campaña, tu información puede ser compartida con los responsables de dicha campaña para facilitar el contacto y la entrega de recompensas.</li>
                        </ul>
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Protección de datos</h3>
                    <p className="mb-4 text-customBlack">
                        Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger tu información personal frente a accesos no autorizados, alteración, divulgación o destrucción. Esto incluye:
                        <ul className="list-disc list-inside ml-4">
                            <li>Cifrado de los datos durante las transacciones (SSL).</li>
                            <li>Accesos restringidos a la información personal dentro de nuestra plataforma.</li>
                            <li>Monitoreo continuo de nuestras medidas de seguridad.</li>
                        </ul>
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Derechos del usuario</h3>
                    <p className="mb-4 text-customBlack">
                        Como usuario de nuestra plataforma, tienes derecho a:
                        <ul className="list-disc list-inside ml-4">
                            <li>Acceder: Solicitar información sobre los datos personales que almacenamos.</li>
                            <li>Rectificar: Actualizar o corregir cualquier dato incorrecto o incompleto.</li>
                            <li>Eliminar: Solicitar la eliminación de tus datos, siempre que no haya una obligación legal que requiera su retención.</li>
                            <li>Restricción: Limitar el uso de tus datos personales en determinadas circunstancias.</li>
                            <li>Retirar el consentimiento: Si anteriormente diste tu consentimiento para el uso de tus datos, puedes retirarlo en cualquier momento.</li>
                        </ul>
                        Para ejercer cualquiera de estos derechos, puedes contactarnos a través de contacto@boostup.com.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Uso de cookies</h3>
                    <p className="mb-4 text-customBlack">
                        Utilizamos cookies para mejorar la experiencia del usuario en nuestra plataforma, incluyendo el análisis del comportamiento del usuario y la personalización de contenido. Puedes configurar tu navegador para que rechace algunas o todas las cookies, aunque esto podría afectar la funcionalidad de la plataforma.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Retención de datos</h3>
                    <p className="mb-4 text-customBlack">
                        Solo retenemos tus datos personales durante el tiempo que sea necesario para cumplir con los fines descritos en esta política o según lo requiera la ley. Una vez que ya no necesitemos tus datos, los eliminaremos de forma segura.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Enlaces a sitios de terceros</h3>
                    <p className="mb-4 text-customBlack">
                        Nuestra plataforma puede contener enlaces a sitios web externos. No somos responsables de las prácticas de privacidad o del contenido de dichos sitios de terceros. Te recomendamos que revises sus políticas de privacidad antes de proporcionar cualquier dato personal.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Cambios en la política de privacidad</h3>
                    <p className="mb-4 text-customBlack">
                        Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Notificaremos a los usuarios de cualquier cambio significativo publicando una nueva versión en nuestra plataforma o enviando un correo electrónico. Te recomendamos que revises esta política periódicamente para mantenerte informado sobre cómo protegemos tus datos.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-customGreen">Contacto</h3>
                    <p className="mb-4 text-customBlack">
                        Si tienes alguna pregunta o inquietud sobre nuestra Política de Privacidad, puedes comunicarte con nosotros en contacto@boostup.com.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
