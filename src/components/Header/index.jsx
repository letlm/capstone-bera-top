import HeaderStyled from "./styles.js";
import Logo from "../../assets/Logo.png";
import { useHistory, Redirect } from "react-router-dom";

export default function Header({ bgColor }) {
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
