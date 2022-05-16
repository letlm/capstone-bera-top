import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReviewsCard from "../../components/ReviewsCard";
import { useParams } from "react-router-dom";
import BeerCard from "../../components/BeerCard";
import { useContext } from "react";
import { ApiContext } from "../../providers/ApiProvider";

import { ProductDescription, BeerContainer, Container } from "./styles";

function Beer() {
  const { id } = useParams();
  const { products, setProducts, addReview, editReview, deleteReview } =
    useContext(ApiContext);

  const userStorage = Number(localStorage.getItem("@BeraTop-User"));
  const tokenStorage = JSON.parse(localStorage.getItem("@BeraTop-Token"))
  console.log(tokenStorage)

  return (
    <>
      <Header bgColor={"#F3F3F3"} />

      <BeerContainer>
        {products.map((product) => {
          if (product.id == id) {
            return (
              <>
                <BeerCard product={product} key={id} beerPage={"beerPage"} />

                <ProductDescription>
                  Resumo: {product.description}
                </ProductDescription>
                <ul>
                  {product.reviews.map((prod) => {
                    const sameUser = prod.userId === userStorage;
                    return (
                      <ReviewsCard
                        product={prod}
                        key={prod.id}
                        sameUser={sameUser}
                        idReview={prod.id}
                        token={tokenStorage}
                      />
                    );
                  })}
                </ul>
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
