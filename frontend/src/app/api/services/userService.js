import axios from 'axios';
import { signOut } from 'next-auth/react';
import Cookies from 'js-cookie';

const userRegister = async (accessToken, name, setUser, setApiCalled, setErrorMessage) => {
    const role = Cookies.get('role');
    try {
        const res = await axios.post("api/user/auth/register", { role }, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        const response = res.data;
    
        const userData = {
            id: response.user._id,
            name: name?.split(' ')[0],
            email: response.user.email,
            role: role,
            projects: response.user.projects,
            token: accessToken,
        };
   
        Cookies.set('token', accessToken);
        setUser(userData);
        Cookies.set('user', JSON.stringify(userData)); 
        Cookies.remove('action');
        Cookies.remove('role');

    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error desconocido'; 
        setErrorMessage(errorMessage);
        await signOut({ redirect: false });
        setApiCalled(false);
        Cookies.remove('action');
        Cookies.remove('role');
    }
};

const userLogin = async (accessToken, name, setUser, setApiCalled, setErrorMessage) => {
    try {
        const res = await axios.get("/api/user/login", {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        const response = res.data;
       
        const userData = {
            id: response.user._id,
            name: name?.split(' ')[0],
            email: response.user.email,
            role: response.user.role,
            projects: response.user.projects,
            token: accessToken,
        };
        
        Cookies.set('token', accessToken);
        setUser(userData);
        Cookies.set('user', JSON.stringify(userData)); 
        Cookies.remove('action');

    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Sin mensaje de error'; 
        setErrorMessage(errorMessage);
        await signOut({ redirect: false });
        setApiCalled(false);
        Cookies.remove('action');
    }
};

const userService = {
    userRegister,
    userLogin,
};

export default userService;
