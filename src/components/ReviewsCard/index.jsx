import { StyledLi } from "./style";

function ReviewsCard({ product, userName }) {
  return (
    <StyledLi>
      <div>
        <p>
          Nota: <span>{product.stars}</span>
        </p>
        <p>
          Preço <span>{product.price}</span>
        </p>
      </div>
      <p>
        Comentário:{" "}
        <span>
          {product.comment} ({userName})
        </span>
      </p>
    </StyledLi>
  );
}

export default ReviewsCard;
