import Button from './Button';
import { signIn } from 'next-auth/react';

const Auth = ({ isLogin, toggleForm }) => {
    const handleAuth = async (role, action) => {
        if (!isLogin) {
            localStorage.setItem('role', role);
        }
        localStorage.setItem('action', action);
        await signIn('google');
    }

    return (
        <>
            <div className="flex flex-col space-y-4">
            <small className="text-gray-600">
                {
                    isLogin ? 'Selecciona el rol con el que te registraste e inicia sesión.' 
                    : 'Selecciona el rol y registrate con tu cuenta de Google.'
                }
            </small>
                <Button
                    onClick={() => handleAuth('emprendedor', isLogin ? 'login' : 'register')}
                    className="w-full px-4 py-2 bg-customGreen text-customWhite rounded 
                        hover:bg-customGreen transition">
                        Emprendedor con Google
                </Button>
                <Button
                    onClick={() => handleAuth('inversor', isLogin ? 'login' : 'register')}
                    className="w-full px-4 py-2 bg-customGreen text-customWhite rounded 
                        hover:bg-customGreen transition">
                        Inversionista con Google
                </Button>
            </div>

            <Button
                className="mt-6 text-blue-500 underline"
                onClick={toggleForm}>
                {
                    isLogin ? '¿No tienes cuenta? Regístrate' 
                    : '¿Ya tienes cuenta? Inicia sesión'
                }
            </Button>
        </>
    );
};

export default Auth;
