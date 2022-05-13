import { TitlePage, ParagraphOne, ParagraphTwo, Container } from "./styles";
import { WhoDoes } from "./styles";
import BeerImage from "../../assets/BeerImage79x74.png";
import Feedback from "../../assets/necessidade46x55.png";
import Proposito from "../../assets/proposito46x55.png";
import Header from "../../components/Header";
import InfoDevs from "../../components/InfoDevs";
import Leo from "../../assets/leo.png";
import Jhon from "../../assets/jhon.png";
import Ana from "../../assets/ana.png";
import Leticia from "../../assets/let.png";
import Regis from "../../assets/regis.png";
import Luan from "../../assets/luan.png";
import Footer from "../../components/Footer";

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

        <div className="container" >
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
      <Footer></Footer>
    </>
  );
}

export default About;
