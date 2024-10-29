"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import AboutUs from '@/app/components/AboutUs';
import Modal from '@/app/components/Modal';
import { useUserContext } from '@/app/contexts/UserContext';

const AboutUsPage = () => {
    const { isLoading, errorMessage, setErrorMessage } = useUserContext();
    
    const closeModal = () => {
        setErrorMessage('');
    };

    return (
        <>
            <Navbar isLoading={isLoading} />
            <div className="bg-cover bg-customGray" id='about-us'>
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
