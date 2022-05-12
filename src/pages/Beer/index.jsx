import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import BeerCard from "../../components/BeerCard";
import { useContext } from "react";
import { ApiContext } from "../../providers/ApiProvider";
import ReviewsCard from "../../components/ReviewsCard";

function Beer() {
  const { id } = useParams();
  const { products, setProducts, addReview, editReview, deleteReview } =
    useContext(ApiContext);

  return (
    <>
      <Header bgColor={"#F3F3F3"} />
      {products.map((product) => {
        if (product.id == id) {
          return (
            <>
              <BeerCard product={product} key={id} />
              <ul>
                <ReviewsCard product={product} userName="" key={id} />
              </ul>
            </>
          );
        }
      })}
      <Footer />
    </>
  );
}

export default Beer;
