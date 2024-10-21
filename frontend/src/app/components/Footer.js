import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineX } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-customGray text-customWhite box-border">
            <div className="container mx-auto text-center px-4 py-6">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="mailto:contacto@boostup.com" className="hover:text-customGreen">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://wa.me/123456789" target="_blank" className="hover:text-customGreen">
                        <FaWhatsapp size={24} />
                    </a>
                    <a href="https://facebook.com" target="_blank" className="hover:text-customGreen">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-customGreen">
                        <AiOutlineX size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-customGreen">
                        <FaLinkedinIn size={24} />
                    </a>
                </div>
                <p className="text-sm">&copy; 2024 BOOSTUP. Reservados todos los derechos.</p>
            </div>
        </footer>
    );
};

export default Footer;
