import RedesSociales from "./RedesSociales";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-customGray text-customWhite">
            <div className="container mx-auto text-center px-4 py-6">
                <RedesSociales />
                <p className="text-lg font-bold mb-2">BOOST
                    <span className='text-customGreen'>UP</span>
                </p>
                <p className="text-sm">&copy; 2024 BOOSTUP. Reservados todos los derechos.</p>
                <div className="mt-4">
                    <Link 
                        href="/frequent-questions" 
                        className="text-sm text-customWhite hover:underline mx-2">
                        FAQ
                    </Link>
                    <Link 
                        href="/privacy-policy" 
                        className="text-sm text-customWhite hover:underline mx-2">
                        Política de privacidad
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
