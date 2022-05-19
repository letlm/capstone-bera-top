import { FaStar } from "react-icons/fa";
import Star from "./styles";
import { useState } from "react";

function StarRating({rating, setRating}) {
  
  const [hover, setHover] = useState();

  return (
    <Star>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#FFC125" : "#E4E5E9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </Star>
  );
}

export default StarRating;
