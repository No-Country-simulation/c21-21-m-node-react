import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Dashboard from '@/app/components/Dashboard';

const DashboardPage = () => {
    return (
        <Container>
            <Navbar />
            <Dashboard />
            <Footer />
        </Container>
    );
};

export default DashboardPage;
