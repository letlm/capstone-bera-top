import { TitlePage, ParagraphOne, ParagraphTwo, Container } from "./styles";
import { WhoDoes } from "./styles";
import BeerImage from "../../assets/BeerImage.png";
import Feedback from "../../assets/Necessidade.png";
import Proposito from "../../assets/Proposito.png";
import Header from "../../components/Header";
import InfoDevs from "../../components/InfoDevs";
import Footer from "../../components/Footer";
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
      linkedin: "/rochaleonardof",
      github: "/leonrockk",
      image: Leo,
    },
    {
      name: "Jhon Muller",
      work: "Quality Assurance",
      linkedin: "/jhon-muller-082a3420a",
      github: "/jhonmullerfreitas",
      image: Jhon,
    },
    {
      name: "Ana Laura",
      work: "Product Owner",
      linkedin: "/ana-laura-nunes-developer",
      github: "/analauranunes",
      image: Ana,
    },
    {
      name: "Leticia L.",
      work: "Tech Leader",
      linkedin: "/leticia-leal-moreira",
      github: "/letlm",
      image: Leticia,
    },
    {
      name: "Régis S.",
      work: "Scrum Master",
      linkedin: "/régis-theobald-silveira-04279514b",
      github: "/xregizzz",
      image: Regis,
    },
    {
      name: "Luan C.",
      work: "Quality Assurance",
      linkedin: "/luan-catarino-curupaná-27857112a",
      github: "/luancatarino",
      image: Luan,
    },
  ];

  return (
    <>
      <Header bgColor={"#c4c4c4"}></Header>
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
                Sua necessidade: Ter um feedback sobre diversas marcas,
                tamanhos, teores e modelos de cervejas.
              </p>
              <img src={Feedback} alt="feedback do cliente"></img>
            </ParagraphOne>

            <ParagraphTwo className="item-three">
              <img src={Proposito} alt="proposito"></img>
              <p>
                Nosso propósito: Te ajudar a poupar seu precioso tempo ao
                escolher aquela cerveja que tanto pensou em experimentar.
              </p>
            </ParagraphTwo>
          </div>
        
          <div className="part-two" >
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
      <Footer></Footer>
    </>
  );
}

export default About;
