import { StyledButtons, StyledContainer, StyledLi, Star } from "./styles";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { useContext } from "react";
import { ApiContext } from "../../providers/ApiProvider";
import { FaStar } from "react-icons/fa";

function ReviewsCard({ product, sameUser = false, idReview, token }) {

  const { deleteReview, reviews, setReviews } = useContext(ApiContext);

  const handleDelete = () => {
    deleteReview(token, idReview);
    const deletedReview = reviews.filter((review) => review.id !== idReview);
    setReviews(deletedReview);
  };

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
            <FiTrash2 onClick={handleDelete} />
          </button>
        </StyledButtons>
      )}
    </StyledLi>
  );

}

export default ReviewsCard;
