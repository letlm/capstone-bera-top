import FooterStyled from "./styles.js";
import DoubleBeer from "../../assets/DoubleBeer.svg";
import { Link } from "react-router-dom";

function Footer() {
  const currentURL = window.location.href;
  return (
    <FooterStyled>
      <div className="footer">
        <img src={DoubleBeer} alt="Two beers schocking"></img>
        <section>
          {!currentURL.includes("suggest") && (
            <Link to={"/suggest"}>Recomende uma nova Bera!</Link>
          )}
          <Link to={"/about"}>Sobre a galera BeraTop</Link>
        </section>
      </div>
    </FooterStyled>
  );
}

export default Footer;
