import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                <h1 className="text-5xl font-bold mb-6">Bienvenido a CrowdStart</h1>
                <p className="text-lg text-gray-700 mb-6">Apoya a nuevas empresas innovadoras y haz realidad tus ideas.</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Explorar proyectos</button>
            </main>
            <Footer />
        </>
    );
}