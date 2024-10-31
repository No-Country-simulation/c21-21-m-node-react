import Image from "next/image";
import Button from "../Button";

const CallToAction = () => {
    return (
        <div className="bg-customGreen text-center px-8 pt-10 pb-20 md:pt-16 md:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 lg:gap-0">
                <div>
                    <h2 className="text-customWhite text-2xl font-bold mb-4">
                        ¡Únete a nuestra plataforma hoy!
                    </h2>
                    <p className="text-customWhite mb-10">
                        Impulsa tu proyecto o encuentra oportunidades de inversión
                    </p>
                    <div className="hidden md:block">
                        <Button className="bg-customGray text-white font-bold px-8 py-3 border-2 
                            border-customGray
                            rounded-full hover:bg-transparent 
                            hover:border-customGray">
                            ¡Regístrate ahora!
                        </Button> 
                    </div>
                </div>
                <div>
                    <Image 
                        src="/images/callToAction.webp" 
                        alt="entrepreneur-inversor"
                        width={400} 
                        height={300} 
                        className="mx-auto"
                    />
                    <div className="pt-16 md:hidden">
                        <Button className="bg-customGray text-white font-bold px-8 py-3 border-2 
                            border-customGray
                            rounded-full hover:bg-transparent 
                            hover:border-customGray">
                            ¡Regístrate ahora!
                        </Button>     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
