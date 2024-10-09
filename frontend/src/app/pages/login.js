import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Lógica de autenticación
    };

    return (
        <>
            <Navbar />
            <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
                <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
                    <h1 className="text-xl font-bold mb-4">Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
                </form>
            </main>
            <Footer />
        </>
    );
}
