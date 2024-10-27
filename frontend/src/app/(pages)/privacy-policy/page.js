import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import PrivacyPolicy from '@/app/components/PrivacyPolicy';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-cover bg-customBlack">
                <Container>
                    <PrivacyPolicy />
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;
