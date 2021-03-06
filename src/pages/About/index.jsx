import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutComponent from "../../components/AboutComponent";
import { Container } from "./styles";

function About() {
  return (
    <>
      <Header bgColor={"#c4c4c4"} />
      <AboutComponent />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default About;
