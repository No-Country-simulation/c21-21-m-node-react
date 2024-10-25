"use client"
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useApiContext } from '../contexts/ApiContext';
import { useUserContext } from '../contexts/UserContext';
import userService from '../api/services/userService';
import Cookies from 'js-cookie';

const useAuth = () => {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const { apiCalled, setApiCalled } = useApiContext();
    const { setUser } = useUserContext();

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
        };
    
    }, [session, apiCalled, setUser]);

    return { isLoading, errorMessage, setErrorMessage };
};

export default useAuth;
