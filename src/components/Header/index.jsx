import HeaderStyled from "./styles.js";
import Logo from "../../assets/Logo.svg";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";

function Header({ bgColor }) {
    const { authenticated, setAuthenticated } = useAuth();
    const history = useHistory();

    const handleNavigation = (path) => {
        return history.push(path);
    };

    const logout = () => {
        handleNavigation("/");
        setAuthenticated(false);
        localStorage.clear();
    };

    const currentURL = window.location.href;

    return (
        <HeaderStyled bgColor={bgColor}>
            <div className="logo" onClick={() => handleNavigation("/")}>
                <h1>BeraTop</h1>
                <img src={Logo} alt="logo"></img>
            </div>

            {authenticated ? (
                <button onClick={logout}>Sair</button>
            ) : currentURL.includes("login") || currentURL.includes("signup") ? (
                <button onClick={() => handleNavigation("/")}>Voltar</button>
            ) : (
                <button onClick={() => handleNavigation("/login")}>Login</button>
            )}
        </HeaderStyled>
    );
}

export default Header;
