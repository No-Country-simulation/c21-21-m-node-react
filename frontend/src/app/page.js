"use client"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Onboarding from './components/onboarding/Onboarding';
import Button from './components/Button';
import Link from 'next/link';
import { useUserContext } from './contexts/UserContext';

const Home = () => {
    const { isLoading } = useUserContext();
    
    return (
        <>
            <Navbar isLoading={isLoading} />
            <div className="bg-cover bg-customGray" id='home'>
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
            </div>
            <Onboarding />
            <Footer />
       </>
    );
};

export default Home;
