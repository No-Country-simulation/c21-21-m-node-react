"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Dashboard from '@/app/components/Dashboard';
import LoaderView from '@/app/components/loaders/LoaderView';
import { useUserContext } from '@/app/contexts/UserContext';

const DashboardPage = () => {
    const { user } = useUserContext(); 
    const router = useRouter();

    useEffect(() => {
        if (!user || !user.token) {
            router.push('/');
        }
    }, [user, router]);

    return (
        <>
            {
                !user?.token ? (
                    <LoaderView />
                ) 
                : (
                    <>
                        <Navbar />
                        <Container>
                            <Dashboard />
                        </Container>
                        <Footer />
                    </>
                )
            }
           
        </>
    );
};

export default DashboardPage;
