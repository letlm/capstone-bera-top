import { TitlePage, ParagraphOne, ParagraphTwo, Container } from "./styles";
import { WhoDoes } from "./styles";
import BeerImage from "../../assets/BeerImage.png";
import Feedback from "../../assets/Necessidade.png";
import Proposito from "../../assets/Proposito.png";
import Header from "../../components/Header";
import InfoDevs from "../../components/InfoDevs";
import Leo from "../../assets/DevLeo.png";
import Jhon from "../../assets/DevJhon.png";
import Ana from "../../assets/DevAna.png";
import Leticia from "../../assets/DevLet.png";
import Regis from "../../assets/DevRegis.png";
import Luan from "../../assets/DevLuan.png";

function About() {
  const devs = [
    {
      name: "Leonardo R.",
      work: "Quality Assurance",
      linkendin: "/leorocha",
      github: "/leorocha",
      image: Leo,
    },
    {
      name: "Jhon Muller",
      work: "Quality Assurance",
      linkendin: "/jhonmuller",
      github: "/jhonmuller",
      image: Jhon,
    },
    {
      name: "Ana Laura",
      work: "Product Owner",
      linkendin: "/analaura",
      github: "/analaura",
      image: Ana,
    },
    {
      name: "Leticia L.",
      work: "Tech Leader",
      linkendin: "/leticia",
      github: "/leticia",
      image: Leticia,
    },
    {
      name: "Régis S.",
      work: "Scrum Master",
      linkendin: "/regis",
      github: "/regis",
      image: Regis,
    },
    {
      name: "Luan C.",
      work: "Quality Assurance",
      linkendin: "/luan",
      github: "/luan",
      image: Luan,
    },
  ];

  return (
    // <Container>
    <>
      <Header bgColor={"#c4c4c4"}></Header>
      <Container>
        <div>
          <div>
            <TitlePage>
              <p>Sobre a</p>
              <p>
                BeraTop <img src={BeerImage} alt="Logo da BeraTop"></img>
              </p>
            </TitlePage>
            <ParagraphOne>
              <p>
                Sua necessidade: Ter um feedback sobre diversas marcas,
                tamanhos, teores e modelos de cervejas.
              </p>
              <img src={Feedback} alt="feedback do cliente"></img>
            </ParagraphOne>

            <ParagraphTwo>
              <img src={Proposito} alt="proposito"></img>
              <p>
                Nosso propósito: Te ajudar a poupar seu precioso tempo ao
                escolher aquela cerveja que tanto pensou em experimentar.
              </p>
            </ParagraphTwo>
          </div>
        </div>

        <div>
          <WhoDoes>
            <p>Quem faz a</p>
            <p>
              BeraTop <img src={BeerImage} alt="Logo da BeraTop"></img>{" "}
            </p>
          </WhoDoes>

          <InfoDevs position="left" dev1={devs[0]} dev2={devs[1]}></InfoDevs>

          <InfoDevs position="right" dev1={devs[2]} dev2={devs[3]}></InfoDevs>

          <InfoDevs position="left" dev1={devs[5]} dev2={devs[4]}></InfoDevs>
        </div>
        {/* </div> */}
      </Container>
    </>
  );
}

export default About;
