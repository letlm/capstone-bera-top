import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext([]);

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("@BeraTop-Token");
    
    isAuth ? setAuthenticated(true) : setAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
