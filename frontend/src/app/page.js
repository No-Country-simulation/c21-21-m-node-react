import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>BOOSTUP</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="flex flex-col min-h-screen bg-cover"
                style={{ backgroundImage: `url('/banner.jpg')`, backgroundPosition: '20% 0' }}>
                <Navbar />
                <Container className="flex flex-col justify-center items-center flex-1 text-center">
                    <div className="flex flex-col justify-center items-center text-center h-full">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-4 md:pt-20 text-white mt-20">Bienvenido a BOOSTUP</h1>
                        <p className="text-lg md:text-xl font-bold mb-6 text-white">Incentiva a nuevas empresas y haz realidad sus ideas.</p>

                        <Link href="/projects">
                            <button className="bg-customGreen text-white font-bold px-8 py-3 rounded-full mt-20 hover:text-customGreen hover:bg-customGray hover:border hover:border-customGreen">
                                Explorar proyectos
                            </button>
                        </Link>
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    );
};

export default Home;
