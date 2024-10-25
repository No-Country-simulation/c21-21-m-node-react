"use client"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Button from './components/Button';
import Modal from './components/Modal';
import backgroundImage from '../../public/banner.jpg'; 
import useAuth from './hooks/useAuth'
import Link from 'next/link';

const Home = () => {
    const { isLoading, errorMessage, setErrorMessage } = useAuth();
    
    const closeModal = () => {
        setErrorMessage('');
    };

    return (
        <div
            className="flex flex-col min-h-screen bg-cover bg-customGray"
            style={{backgroundImage: `url(${backgroundImage.src})`}}>
            <Navbar isLoading={isLoading} />
            <Container className="flex flex-col justify-center items-center flex-1 text-center">
                <div className="flex flex-col justify-center items-center text-center h-full">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-4 md:pt-20 text-white mt-20">
                        Bienvenido a BOOSTUP
                    </h1>
                    <p className="text-lg md:text-xl font-bold mb-6 text-white">Incentiva a nuevas 
                        empresas y haz realidad sus ideas.</p>
                    <Link href="/projects" passHref>
                        <Button className="bg-customGreen text-white font-bold px-8 py-3 rounded-full 
                            mt-20 hover:text-customGreen hover:bg-customGray hover:border-customGray">
                            Explorar proyectos
                        </Button>
                    </Link>
                </div>
            </Container>
            <Footer />
            <Modal
                isOpen={!!errorMessage}
                onClose={closeModal}
                title="Error al autenticarse"
                width={"w-full md:max-w-sm"}
                margin={"mt-24"}
                isError={!!errorMessage}>
                {errorMessage}
            </Modal>
        </div>
    );
};

export default Home;
