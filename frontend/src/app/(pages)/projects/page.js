"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Projects from '@/app/components/projects/Projects';
import useAuth from '@/app/hooks/useAuth';

const ProjectsPage = () => {
    const { isLoading } = useAuth();

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
