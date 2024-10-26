'use client';

const AboutUs = () => {
    return (
        <section className="bg-customGray bg-opacity-60 p-2 md:p-6 lg:p-20 rounded-lg" id="about-us">
            <div className="container mx-auto">
                <div className="text-center pt-2 pb-10 md:mb-4">
                    <h1 className="text-customH1 font-extrabold text-customWhite 
                        inline-block border-b-4 border-customGreen pb-2">
                        Sobre nosotros
                    </h1>
                    <p className="pt-6 text-lg leading-6 text-customWhite">
                        Somos una plataforma de financiamiento colectivo diseñada 
                        para conectar emprendimientos emergentes con pequeñas empresas 
                        y emprendedores que buscan invertir en proyectos innovadores. 
                        Facilitamos el crecimiento de nuevas ideas al ofrecer un espacio 
                        accesible y seguro donde las inversiones se transforman en realidades.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-2">
                    <div className="p-6 bg-customWhite rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-customGreen">Nuestra Misión</h3>
                        <p className="mt-4 text-customBlack">
                            Proporcionamos un espacio donde los inversores pueden 
                            descubrir oportunidades innovadoras y apoyar proyectos 
                            que transformen el futuro. Cada proyecto que apoyamos 
                            está alineado con nuestros principios de sostenibilidad, 
                            impacto social y desarrollo tecnológico.
                        </p>
                    </div>
                    <div className="p-6 bg-customWhite rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-customGreen">Nuestros Valores</h3>
                        <p className="mt-4 text-customBlack">
                            Creemos en la innovación, la transparencia y el trabajo en equipo. 
                            En BOOSTUP, valoramos la seriedad, la confianza y la seguridad, 
                            creando un entorno confiable tanto para los emprendedores como 
                            para los inversores.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
