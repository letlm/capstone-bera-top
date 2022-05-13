import { StyledLi } from "./style";

function ReviewsCard({ product }) {
  return (
    <StyledLi>
      {console.log(product)}
      <div>
        <p>
          Nota: <span>{product.stars}</span>
        </p>
        <p>
          Preço: <span>R${product.price}</span>
        </p>
      </div>
      <p>
        Comentário:{" "}
        <span>
          {product.comment}
        </span>
      </p>
    </StyledLi>
  );
}

export default ReviewsCard;
