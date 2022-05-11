import HeaderStyled from "./styles.js";
import Logo from "../../assets/Logo.svg";
import { useHistory } from "react-router-dom";

function Header({ bgColor }) {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <HeaderStyled bgColor={bgColor}>
      <div className="logo" onClick={() => handleNavigation("/")}>
        <h1>BeraTop</h1>
        <img src={Logo} alt="logo"></img>
      </div>

      <button onClick={() => handleNavigation("/")}>Voltar</button>
    </HeaderStyled>
  );
}

export default Header;
