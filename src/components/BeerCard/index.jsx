import Comments from "../../assets/Comments.png";
import { InfosBeer, LiBeer } from "./styles";
import StarRating from "../../components/StarRating";

function BeerCard({ product }) {
  const { name, initialPrice, category, alcohol, image, reviews } = product;

  const averagePrice = () => {
    const sum =
      reviews &&
      reviews.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price;
      }, initialPrice);

    const average = sum / (reviews.length + 1);

    return reviews
      ? average.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      : initialPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
  };

  return (
    <LiBeer>
      <img className="beer" src={image} alt={"name"} />
      <StarRating/>
      <span className="title">{name}</span>
      <InfosBeer>
        <div>
          <span className="category">{category}</span>
          <span>{averagePrice}</span>
          <span className="comments">
            {reviews.length}
            <img src={Comments} alt="Símbolo de comentário" />
          </span>
        </div>
        <span>Teor: {alcohol}</span>
      </InfosBeer>
    </LiBeer>
  );
}

export default BeerCard;
