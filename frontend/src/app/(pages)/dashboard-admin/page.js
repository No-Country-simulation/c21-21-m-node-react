"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Dashboard from '@/app/components/admin/Dashboard';


const AdminDashboard = () => {
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

export default AdminDashboard;
