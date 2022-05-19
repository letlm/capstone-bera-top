import { TitlePage, ParagraphOne, ParagraphTwo, Container } from "./styles";
import { WhoDoes } from "./styles";
import BeerImage from "../../assets/BeerImage.png";
import Feedback from "../../assets/Necessidade.png";
import Proposito from "../../assets/Proposito.png";
import InfoDevs from "../../components/InfoDevs";
import devs from "../Devs";

function AboutComponent() {
  return (
    <Container>
      <div className="part-one">
        <TitlePage className="item-one">
          <p>Sobre a</p>
          <p>
            BeraTop <img src={BeerImage} alt="Logo da BeraTop"></img>
          </p>
        </TitlePage>
        <ParagraphOne className="item-two">
          <p>
            Sua necessidade: Ter um feedback sobre diversas marcas, tamanhos,
            teores e modelos de cervejas.
          </p>
          <img src={Feedback} alt="feedback do cliente"></img>
        </ParagraphOne>

        <ParagraphTwo className="item-three">
          <img src={Proposito} alt="proposito"></img>
          <p>
            Nosso propósito: Te ajudar a poupar seu precioso tempo ao escolher
            aquela cerveja que tanto pensou em experimentar.
          </p>
        </ParagraphTwo>
      </div>

      <div className="part-two">
        <WhoDoes>
          <p>Quem faz a</p>
          <p>
            BeraTop <img src={BeerImage} alt="Logo da BeraTop"></img>{" "}
          </p>
          <p>acontecer...</p>
        </WhoDoes>

        <div className="container-info-devs">
          <InfoDevs position="left" dev1={devs[0]} dev2={devs[1]}></InfoDevs>
          <InfoDevs position="right" dev1={devs[2]} dev2={devs[3]}></InfoDevs>
          <InfoDevs position="left" dev1={devs[5]} dev2={devs[4]}></InfoDevs>
        </div>
      </div>
    </Container>
  );
}

export default AboutComponent;
