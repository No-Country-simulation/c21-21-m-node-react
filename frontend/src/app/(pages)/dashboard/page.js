"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Dashboard from '@/app/components/Dashboard';
import { useUserContext } from '@/app/contexts/UserContext';

const DashboardPage = () => {
    const { isLoading } = useUserContext();

    return (
        <>
            <Navbar isLoading={isLoading} />
            <Container>
                <Dashboard />
            </Container>
            <Footer />    
        </>
    );
};

export default DashboardPage;
