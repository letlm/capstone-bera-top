import { StyledButtons, StyledContainer, StyledLi } from "./styles";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

function ReviewsCard({ product, sameUser = false }) {
  return (
    <StyledLi>
      {console.log(product)}
      <StyledContainer>
        <div>
          <p>
            Nota: <span>{product.stars}</span>
          </p>
          <p>
            Preço: <span>R$ {product.price}</span>
          </p>
        </div>
        <p>
          Comentário: <span>{product.comment}</span>
        </p>
      </StyledContainer>
      {sameUser && (
        <StyledButtons>
          <button>
            <FiEdit />
          </button>
          <button>
            <FiTrash2 />
          </button>
        </StyledButtons>
      )}
    </StyledLi>
  );
}

export default ReviewsCard;
