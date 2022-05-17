import { FaStar } from "react-icons/fa";
import { Star } from "./styles";

function StarRatingAvarage({ reviews }) {
    const avarageRating =
        reviews.length > 0
            ? Math.round(
                  reviews &&
                      reviews.reduce((previousValue, currentValue) => {
                          return previousValue + Number(currentValue.stars);
                      }, 0) / reviews.length
              )
            : 0;

    return (
        <Star>
            {[...Array(avarageRating)].map((star, index) => {
                return (
                    <label key={index}>
                        <FaStar color="#FFC125" />
                    </label>
                );
            })}

            {[...Array(5 - avarageRating)].map((star, index) => {
                return (
                    <label key={index}>
                        <FaStar color="#E4E5E9" />
                    </label>
                );
            })}
        </Star>
    );
}

export default StarRatingAvarage;
