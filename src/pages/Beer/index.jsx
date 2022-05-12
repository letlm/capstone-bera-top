import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import BeerCard from "../../components/BeerCard";
import { useContext } from "react";
import { ApiContext } from "../../providers/ApiProvider";

import { ProductDescription, BeerContainer } from "./styles";


function Beer() {
  const { id } = useParams();
  const { products, setProducts, addReview, editReview, deleteReview } =
    useContext(ApiContext);
  const deviceWidth = window.innerWidth;

  return (
    <>
      <Header bgColor={"#F3F3F3"} />

      <BeerContainer>
        {products.map((product) => {
          if (product.id == id) {
            return (
              <>
                <BeerCard product={product} key={id} beerPage={"beerPage"} />
                {deviceWidth > 700 && (
                  <ProductDescription>
                    Resumo: {product.description}
                  </ProductDescription>
                )}
              </>
            );
          }
        })}
      </BeerContainer>

      <Footer />
    </>
  );
}

export default Beer;
