"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import AboutUs from '@/app/components/AboutUs';
import { useUserContext } from '@/app/contexts/UserContext';

const AboutUsPage = () => {
    const { isLoading } = useUserContext();

    return (
        <>
            <Navbar isLoading={isLoading} />
            <div className="bg-cover bg-customGray" id='about-us'>
                <Container>
                    <AboutUs />
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default AboutUsPage;
