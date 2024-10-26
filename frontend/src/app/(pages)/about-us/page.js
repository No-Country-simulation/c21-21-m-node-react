"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import AboutUs from '@/app/components/AboutUs';
import Modal from '@/app/components/Modal';
import useAuth from '@/app/hooks/useAuth';

const AboutUsPage = () => {
    const { isLoading, errorMessage, setErrorMessage } = useAuth();
    
    const closeModal = () => {
        setErrorMessage('');
    };

    return (
        <>
            <Navbar isLoading={isLoading} />
            <div className="flex flex-col min-h-screen bg-cover bg-customGray"
                style={{backgroundImage: `url('/images/fondo-nosotros.webp')`}}>
                <Container>
                    <AboutUs />
                </Container>
            </div>
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
        </>
    );
};

export default AboutUsPage;
