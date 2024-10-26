"use client"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Button from './components/Button';
import Modal from './components/Modal';
import backgroundImage from '../../public/images/banner.webp'; 
import useAuth from './hooks/useAuth'
import Link from 'next/link';

const Home = () => {
    const { isLoading, errorMessage, setErrorMessage } = useAuth();
    
    const closeModal = () => {
        setErrorMessage('');
    };

    return (
        <div className="bg-cover bg-customGray"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url(${backgroundImage.src})`}}>
            <Navbar isLoading={isLoading} />
            <Container>
                <div className="flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold pt-10 md:pt-20">
                        Bienvenido a <span className='font-black'>
                            BOOST<span className='text-customGreen'>UP</span></span>
                    </h1>
                    <p className="text-lg md:text-xl font-bold pt-5">
                        Incentiva a nuevas empresas y haz realidad sus ideas.
                    </p>
                    <Link href="/projects" passHref className='pt-10 lg:pt-20'>
                        <Button className="bg-customGreen text-white font-bold px-8 py-3 
							rounded-full hover:text-customGreen hover:bg-customGray 
							hover:border-customGray">
                            Explorar proyectos
                        </Button>
                    </Link>
                </div>
            </Container>
            <Footer />    
            <Modal
                isOpen={!!errorMessage}
                onClose={closeModal}
                title="Error al ..."
                size="max-w-md max-h-40"
                isError={!!errorMessage}>
                {errorMessage}
            </Modal>
       </div>
    );
};

export default Home;
