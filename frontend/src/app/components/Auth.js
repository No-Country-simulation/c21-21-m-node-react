import { useState } from 'react';
import LoaderButton from './loaders/LoaderButton';
import { signIn } from 'next-auth/react';

const Auth = ({ isLogin, toggleForm }) => {
    const [loadingButton, setLoadingButton] = useState(null); 

    const handleAuth = async (role = null, action) => {
        localStorage.setItem('action', action);
        if (isLogin) {
            setLoadingButton('google-login');
        } else {
            setLoadingButton(role);
            localStorage.setItem('role', role);
        }

        await signIn('google');
    };

    return (
        <>
            <div className="flex flex-col space-y-4">
                <small className="text-gray-600">
                    {isLogin
                        ? 'Dale clic para iniciar sesión.'
                        : 'Selecciona el rol y registrate con tu cuenta de Google.'}
                </small>

                {
                    isLogin ? (
                        <LoaderButton
                            isLoading={loadingButton === 'google-login'}
                            onClick={() => handleAuth(null, 'login')}
                            className="w-full px-4 py-2 bg-customGreen text-customWhite 
                            rounded hover:bg-customGreen transition">
                            Iniciar sesión con Google
                        </LoaderButton>
                    ) 
                    : (
                        <>
                            <LoaderButton
                                isLoading={loadingButton === 'emprendedor'} 
                                onClick={() => handleAuth('emprendedor', 'register')}
                                className="w-full px-4 py-2 bg-customGreen text-customWhite rounded 
                                hover:bg-customGreen transition">
                                Emprendedor con Google
                            </LoaderButton>
                            <LoaderButton
                                isLoading={loadingButton === 'inversor'}
                                onClick={() => handleAuth('inversor', 'register')}
                                className="w-full px-4 py-2 bg-customGreen text-customWhite rounded 
                                hover:bg-customGreen transition">
                                Inversionista con Google
                            </LoaderButton>
                        </>
                    )
                }
            </div>
            <LoaderButton
                className="mt-6 text-blue-500 underline"
                onClick={toggleForm}
                isLoading={false}  
            >
                {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </LoaderButton>
        </>
    );
};

export default Auth;
