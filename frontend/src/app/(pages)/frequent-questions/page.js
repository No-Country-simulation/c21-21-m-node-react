import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import FAQ from '@/app/components/FAQ';

const FAQPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen bg-cover bg-customWhite">
                <Container>
                    <FAQ />
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default FAQPage;
