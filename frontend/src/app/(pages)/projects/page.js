import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Projects from '@/app/components/projects/Projects';

const ProjectsPage = () => {
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

export default ProjectsPage;
