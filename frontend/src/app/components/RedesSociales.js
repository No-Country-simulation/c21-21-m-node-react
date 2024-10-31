import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { AiOutlineX } from 'react-icons/ai';

const RedesSociales = () => {
    return (
        <div className="flex justify-center space-x-6 mb-4">
            <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-customGreen">
                <FaFacebookF size={24} />
            </a>
            <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer" 
                className="hover:text-customGreen">
                <FaInstagram size={24} />
            </a>
            <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-customGreen">
                <FaYoutube size={24} />
            </a>
            <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-customGreen">
                <AiOutlineX size={24} />
            </a>
            <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-customGreen">
                <FaLinkedinIn size={24} />
            </a>
        </div>
    );
};

export default RedesSociales;
