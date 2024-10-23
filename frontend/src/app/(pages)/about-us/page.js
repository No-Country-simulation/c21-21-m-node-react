import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/Container";
import AboutUs from "@/app/components/AboutUs";

const AboutUsPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-customGray"
      style={{ backgroundImage: `url('/images/fondo-nosotros.webp')` }}
    >
      <Navbar />
      <Container>
        <AboutUs />
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
