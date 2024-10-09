import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Lógica de registro
    };

    return (
        <>
            <Navbar />
            <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
                <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-96">
                    <h1 className="text-xl font-bold mb-4">Sign Up</h1>
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign Up</button>
                </form>
            </main>
            <Footer />
        </>
    );
}
