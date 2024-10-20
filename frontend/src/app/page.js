"use client"
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Modal from './components/Modal';
import backgroundImage from '../../public/banner.jpg'; // crear una carpeta en public: images
//import LoaderView from './components/loaders/LoaderView';
import { useSession } from 'next-auth/react';
import { useApiContext } from './contexts/ApiContext';
import { useUserContext } from './contexts/UserContext';
import userService from './api/services/userService';
import Link from 'next/link';

const Home = () => {
    //const [isLoading, setIsLoading] = useState(true);
    const { data: session } = useSession();
    const [errorMessage, setErrorMessage] = useState('');
    const { apiCalled, setApiCalled } = useApiContext();
    const { setUser } = useUserContext();

    useEffect(() => {
        const action = localStorage.getItem('action');
        const accessToken = session?.accessToken;

        if (session && !apiCalled) {
            setApiCalled(true);

            if (action === 'register') {
                userService.userRegister(accessToken, setUser, setApiCalled, setErrorMessage);
            } else if (action === 'login') {
                userService.userLogin(accessToken, setUser, setApiCalled, setErrorMessage);
            }
        }
        //setIsLoading(false)
    }, [session, apiCalled, setUser]);

    const closeModal = () => {
        setErrorMessage('');
    };

    // refactorizar. Crear componente home.
    return (
        <div
            className="flex flex-col min-h-screen bg-cover"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}>
            <Navbar />
            <Container className="flex flex-col justify-center items-center flex-1 text-center">
                <div className="flex flex-col justify-center items-center text-center h-full">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-4 md:pt-20 text-white mt-20">Bienvenido a BOOSTUP</h1>
                    <p className="text-lg md:text-xl font-bold mb-6 text-white">Incentiva a nuevas empresas y haz realidad sus ideas.</p>
                    <Link href="/project">
                        <button className="bg-customGreen text-white font-bold px-8 py-3 rounded-full mt-20 hover:text-customGreen hover:bg-customGray hover:border hover:border-customGreen">
                            Explorar proyectos
                        </button>
                    </Link>
                </div>
            </Container>
            <Footer />
            <Modal
                isOpen={!!errorMessage}
                onClose={closeModal}
                title="Error al ..."
                size='max-w-md max-h-40'
                isError={!!errorMessage}>
                {errorMessage}
            </Modal>
            {/*isLoading && <LoaderView />*/}
        </div>
    );
};

export default Home;
