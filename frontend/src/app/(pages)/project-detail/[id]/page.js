import Navbar from '@/app/components/Navbar';
import Container from '@/app/components/Container';
import ProjectDetail from '@/app/components/projects/ProjectDetail';
import Footer from '@/app/components/Footer';

const ProjectDetailPage = ({ params }) => {
    const { id } = params; 

    return (
        <>
            <Navbar />
            <Container>
                <ProjectDetail id={id} /> 
            </Container>
            <Footer />
        </>
    );
};

export default ProjectDetailPage;
