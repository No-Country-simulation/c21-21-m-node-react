"use client"
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Payment from '@/app/components/investment/Payment';
import useAuth from '@/app/hooks/useAuth';

const InvestmentPaymentPage = () => {
    const { isLoading } = useAuth();

    return (
        <>
            <Navbar isLoading={isLoading} />
            <Container>
                <Payment />
            </Container>
            <Footer />
        </>
    );
};

export default InvestmentPaymentPage;
