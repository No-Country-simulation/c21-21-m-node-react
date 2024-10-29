"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Projects from '@/app/components/projects/Projects';
import { useUserContext } from '@/app/contexts/UserContext';

const ProjectsPage = () => {
    const { isLoading } = useUserContext();

    return (
        <>
            <Navbar isLoading={isLoading} />
            <Container>
                <Projects />
            </Container>
            <Footer />
        </>
    );
};

export default ProjectsPage;
