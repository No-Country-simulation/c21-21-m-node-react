import { useState } from 'react';
import LoaderButton from './loaders/LoaderButton';
import { signIn } from 'next-auth/react';

const Auth = ({ isLogin, toggleForm }) => {
    const [loadingButton, setLoadingButton] = useState(null); 

    const handleAuth = async (role, action, button) => {
        setLoadingButton(button); 

        if (!isLogin) {
            localStorage.setItem('role', role);
        }
        localStorage.setItem('action', action);

        await signIn('google');
    };

    return (
        <>
            <div className="flex flex-col space-y-4">
                <small className="text-gray-600">
                    {isLogin
                        ? 'Selecciona el rol con el que te registraste e inicia sesión.'
                        : 'Selecciona el rol y registrate con tu cuenta de Google.'}
                </small>

                <LoaderButton
                    isLoading={loadingButton === 'emprendedor'} 
                    onClick={() => handleAuth('emprendedor', isLogin ? 'login' : 'register', 'emprendedor')}
                    className="w-full px-4 py-2 bg-customGreen text-customWhite rounded hover:bg-customGreen transition"
                >
                    Emprendedor con Google
                </LoaderButton>

                <LoaderButton
                    isLoading={loadingButton === 'inversor'}
                    onClick={() => handleAuth('inversor', isLogin ? 'login' : 'register', 'inversor')}
                    className="w-full px-4 py-2 bg-customGreen text-customWhite rounded hover:bg-customGreen transition"
                >
                    Inversionista con Google
                </LoaderButton>
            </div>

            <LoaderButton
                className="mt-6 text-blue-500 underline"
                onClick={toggleForm}
                isLoading={false}  // Este botón no necesita loading
            >
                {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </LoaderButton>
        </>
    );
};

export default Auth;
