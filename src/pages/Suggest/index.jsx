import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RecomendationForm from "../../components/RecomendationForm";
import { Container } from "./styles";

function Suggest() {
  console.log("teste");
  return (
    <Container>
      <Header bgColor={"#C4C4C4"} />
      <RecomendationForm />
      <Footer />
    </Container>
  );
}

export default Suggest;
