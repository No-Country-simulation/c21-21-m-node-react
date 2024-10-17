// src/contexts/UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 

    const updateUser = (userData) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, setUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { useUserContext, UserProvider };
