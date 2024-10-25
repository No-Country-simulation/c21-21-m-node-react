import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import PrivacyPolicy from '@/app/components/PrivacyPolicy';

const PrivacyPolicyPage = () => {
    return (
        <div
            className="flex flex-col min-h-screen bg-cover bg-customBlack">
            <Navbar />
            <Container>
                <PrivacyPolicy />
            </Container>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
