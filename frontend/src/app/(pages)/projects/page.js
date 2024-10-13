import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Projects from '@/app/components/projects';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Projects />
            </Container>
            <Footer />
        </>
    );
};

export default AboutUs;