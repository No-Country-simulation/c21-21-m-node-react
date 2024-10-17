import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [apiCalled, setApiCalled] = useState(false);

    return (
        <ApiContext.Provider value={{ apiCalled, setApiCalled }}>
            {children}
        </ApiContext.Provider>
    );
};

const useApiContext = () => {
    return useContext(ApiContext);
};

export { useApiContext, ApiProvider };
