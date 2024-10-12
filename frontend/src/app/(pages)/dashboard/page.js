import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Dashboard from '@/app/components/Dashboard';

const DashboardPage = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Dashboard />
            </Container>
            <Footer />
        </>
    );
};

export default DashboardPage;
