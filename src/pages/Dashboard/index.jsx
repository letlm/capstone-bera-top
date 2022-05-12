import React from "react";
import BeersShowcase from "../../components/BeersShowcase";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Context } from "./styles";

function Dashboard() {
  return (
    <Container>
      <Header bgColor={"#C4C4C4"} />
      <Context>
        <BeersShowcase />
      </Context>
      <Footer />
    </Container>
  );
}

export default Dashboard;
