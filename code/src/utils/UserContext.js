import { createContext, useState } from 'react';

const UserContext = createContext({
    userData: {},
    setUserData: () => { },
})

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(0);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider }

