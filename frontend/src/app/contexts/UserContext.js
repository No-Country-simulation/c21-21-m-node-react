import { createContext, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'; 
import { useApiContext } from '../contexts/ApiContext'; 
import userService from '../api/services/userService';
import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const { data: session } = useSession(); 
    const [user, setUser] = useState(null); 
    const [isLoading, setIsLoading] = useState(true); 
    const [errorMessage, setErrorMessage] = useState(''); 
    const { apiCalled, setApiCalled } = useApiContext(); 
    const router = useRouter();

    useEffect(() => {
        const savedUser = Cookies.get('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    useEffect(() => {
        if (user) {
            Cookies.set('user', JSON.stringify(user));
        } else {
            Cookies.remove('user');
        }
    }, [user]);

    const updateUser = (userData) => {
        setUser(userData);
    };

    useEffect(() => {
        const handleUserAuth = async () => {
            const action = Cookies.get('action'); 
            const accessToken = session?.accessToken; 
            const name = session?.user?.name;

            if (session && !apiCalled) {
                setApiCalled(true);  
                setIsLoading(true);  

                try {
                    if (action === 'register') {
                        await userService.userRegister(
                            accessToken, name, setUser, setApiCalled, setErrorMessage);
                    } else if (action === 'login') {
                        await userService.userLogin(
                            accessToken, name, setUser, setApiCalled, setErrorMessage);
                    }
                } catch (error) {
                    setErrorMessage('Error al autenticar: ' + error.message);
                } finally {
                    setIsLoading(false); 
                }
            }
        };

        if (session === undefined) {
            setIsLoading(true); 
        } else if (session) {
            handleUserAuth(); 
        } else {
            setIsLoading(false); 
        }
    }, [session, apiCalled, setUser]); 

    const logout = async () => {
        try {
            await signOut({ redirect: false });
            Cookies.remove('user');
            Cookies.remove('token');
            setUser(null);
            router.replace('/');
        } catch (error) {
            setErrorMessage('No se pudo cerrar la sesión');
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, updateUser, 
            isLoading, errorMessage, setErrorMessage, logout }}>
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { useUserContext, UserProvider };
