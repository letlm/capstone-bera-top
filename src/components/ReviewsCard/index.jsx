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
      <StyledContainer>
        <div className="ratingAndPrice">
          <p>
            Preço: <span>R$ {product.price}</span>
          </p>
          <div>
            <Star>
              {[...Array(+product.stars)].map((star, index) => {
                return (
                  <label key={index}>
                    <FaStar color="#FFC125" />
                  </label>
                );
              })}
              {[...Array(5 - product.stars)].map((star, index) => {
                return (
                  <label key={index}>
                    <FaStar color="#E4E5E9" />
                  </label>
                );
              })}
            </Star>
          </div>
        </div>
        <div className="commentEdit">
          <p>
            Comentário: <span>{product.comment}</span>
          </p>

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
        </div>
      </StyledContainer>
    </StyledLi>
  );
}

export default ReviewsCard;
