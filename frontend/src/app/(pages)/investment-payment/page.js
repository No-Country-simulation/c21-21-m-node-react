import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Payment from '@/app/components/investment/Payment';

const InvestmentPaymentPage = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Payment />
            </Container>
            <Footer />
        </>
    );
};

export default InvestmentPaymentPage;
