import FooterStyled from "./styles.js";
import doubleBeer from "../../assets/doubleBeer.svg";
import { useHistory, Link } from "react-router-dom";

function Footer() {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  const currentURL = window.location.href;
  return (
    <FooterStyled>
      <div className="footer">
        <img src={doubleBeer} alt="Two beers schocking"></img>
        <section>
          {!currentURL.includes("suggest") && 
          <Link to={"/suggest"}>Recomende uma nova Bera!</Link> 
        }
          <Link to={"/about"}>Sobre a galera BeraTop</Link>
        </section>
      </div>
    </FooterStyled>
  );
}

export default Footer;
