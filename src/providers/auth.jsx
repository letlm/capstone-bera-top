import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const isAuth = localStorage.getItem("@BeraTop-Token");
        console.log(isAuth);

        isAuth ? setAuthenticated(true) : setAuthenticated(false);
    });

    return <AuthContext.Provider value={{ authenticated }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
