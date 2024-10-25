"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Dashboard from '@/app/components/Dashboard';
import useAuth from '@/app/hooks/useAuth';

const DashboardPage = () => {
    const { isLoading } = useAuth();

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
