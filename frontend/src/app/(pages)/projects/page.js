import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Profile() {
    return (
        <>
            <Navbar />
            <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
                <div className="bg-white p-6 rounded shadow-md w-96">
                    <h1 className="text-xl font-bold mb-4">Proyectos</h1>
                </div>
            </main>
            <Footer />
        </>
    );
}