import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import backgroundImage from './assets/images/background.jpg';

const Home = () => {
    return (
        <div 
            className="flex flex-col min-h-screen bg-cover" 
            style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundPosition: '20% 0' }}> 
            <Navbar />
            <Container className="flex flex-col justify-center items-center flex-1 text-center">
                <div className="flex flex-col justify-center items-center text-center h-full">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-4 md:pt-20">Bienvenido a CrowdStart</h1>
                    <p className="text-lg md:text-xl font-bold mb-6">Apoya a nuevas empresas innovadoras y haz realidad sus ideas.</p>
                    <button className="bg-customGreen text-white font-bold px-8 py-3 rounded-full">Explorar proyectos</button>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Home;
