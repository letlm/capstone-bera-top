import { useContext, useEffect } from "react";
import { ApiContext } from "../../providers/ApiProvider";
import ReviewsCard from "../ReviewsCard";

function ListReviews({ productId }) {
  const userStorage = Number(localStorage.getItem("@BeraTop-User"));
  const tokenStorage = JSON.parse(localStorage.getItem("@BeraTop-Token"));

  const { productReviews, reviews } = useContext(ApiContext);

  useEffect(() => {
    productReviews(productId);
  }, [productId, productReviews]);

  return (
    <ul>
      {reviews.map((prod) => {
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
  );
}

export default ListReviews;
