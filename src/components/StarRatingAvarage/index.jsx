import { FaStar } from "react-icons/fa";
import { Star } from "./styles";

function StarRatingAvarage({ reviews }) {
    const avarageRating = Math.round(
        reviews.reduce((previousValue, currentValue) => {
            return (previousValue + currentValue) / reviews.length;
        }, 0)
    );

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
