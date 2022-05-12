import { StyledLi } from "./style";

function ReviewsCard({ product, userName }) {
  return product.length > 0 ? (
    <StyledLi>
      <div>
        <p>
          Nota: <span>{product.reviews.stars}</span>
        </p>
        <p>
          Preço: <span>{product.reviews.price}</span>
        </p>
      </div>
      <p>
        Comentário:{" "}
        <span>
          {product.reviews.comment} ({userName})
        </span>
      </p>
    </StyledLi>
  ) : (
    ""
  );
}

export default ReviewsCard;
