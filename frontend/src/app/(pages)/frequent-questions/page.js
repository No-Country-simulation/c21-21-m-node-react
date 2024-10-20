import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import FAQ from '@/app/components/FAQ';

const FAQPage = () => {
    return (
        <div
            className="flex flex-col min-h-screen bg-cover bg-customGray" 
            style={{backgroundImage: `url('/fondo-nosotros.jpg')`}}>
            <Navbar />
            <Container>
                <FAQ />
            </Container>
            <Footer />
        </div>
    );
};

export default FAQPage;