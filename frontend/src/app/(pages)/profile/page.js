import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Profile() {
    const user = { name: 'John Doe', email: 'john@example.com' };

    return (
        <>
            <Navbar />
            <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
                <div className="bg-white p-6 rounded shadow-md w-96">
                    <h1 className="text-xl font-bold mb-4">Profile</h1>
                    <p className="mb-4"><strong>Name:</strong> {user.name}</p>
                    <p className="mb-4"><strong>Email:</strong> {user.email}</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
                </div>
            </main>
            <Footer />
        </>
    );
}
