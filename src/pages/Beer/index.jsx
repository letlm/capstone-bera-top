import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import BeerCard from "../../components/BeerCard";
import { useContext } from "react";
import { ApiContext } from "../../providers/ApiProvider";

import { ProductDescription, BeerContainer, Container } from "./styles";
import ListReviews from "../../components/ListReviews";

function Beer() {
  const { id } = useParams();
  const { products } = useContext(ApiContext);

  return (
    <>
      <Header bgColor={"#F3F3F3"} />

      <BeerContainer>
        {products.map((product) => {
          if (product.id == id) {
            return (
              <div key={product.id} className="pageContainer">
                <BeerCard product={product} key={id} beerPage={"beerPage"} />

                <ProductDescription>
                  Resumo: {product.description}
                </ProductDescription>
                <ListReviews productId={id} />
              </div>
            );
          }
        })}
      </BeerContainer>
      <Footer />
    </>
  );
}

export default Beer;
