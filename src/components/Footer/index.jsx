import FooterStyled from "./styles.js";
import doubleBeer from "../../assets/doubleBeer.svg";
import { useHistory, Link } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <FooterStyled>
      <div className="footer">
        <img src={doubleBeer} alt="Two beers schocking"></img>
        <section>
          <Link to={"/suggest"}>Recomende uma nova Bera!</Link>
          <Link to={"/about"}>Sobre a galera BeraTop</Link>
        </section>
      </div>
    </FooterStyled>
  );
}
