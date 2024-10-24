import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { AiOutlineX } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-customGray text-customWhite">
            <div className="container mx-auto text-center px-4 py-6">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-customGreen">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-customGreen">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-customGreen">
                        <FaYoutube size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-customGreen">
                        <AiOutlineX size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-customGreen">
                        <FaLinkedinIn size={24} />
                    </a>
                </div>

                <p className="text-lg font-bold mb-2">BOOSTUP</p>
                <p className="text-sm">&copy; 2024 BOOSTUP. Reservados todos los derechos.</p>

                <div className="mt-4">
                    <a href="/frequent-questions" className="text-sm text-customWhite hover:underline mx-2">FAQ</a>
                    <a href="/privacy-policy" className="text-sm text-customWhite hover:underline mx-2">Política de privacidad</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

