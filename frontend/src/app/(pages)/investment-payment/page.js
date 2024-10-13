import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import InvestmentPayment from '@/app/components/InvestmentPayment';

const InvestmentPaymentPage = () => {
    return (
        <>
            <Navbar />
            <Container>
                <InvestmentPayment />
            </Container>
            <Footer />
        </>
    );
};

export default InvestmentPaymentPage;
