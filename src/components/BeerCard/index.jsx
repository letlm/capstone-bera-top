import Comments from "../../assets/Comments.png";
import { InfosBeer, LiBeer } from "./styles";

function BeerCard({ product }) {
  const { name, initialPrice, category, alcohol, image, reviews } = product;

  // const averagePrice = () => {
  //   const some = product.initialPrice.reduce((acc, item) => {
  //     acc += item;
  //     return acc;
  //   }, 0);
  //   const average = some / initialPrice.length;
  //   return average.toLocaleString("pt-BR", {
  //     style: "currency",
  //     currency: "BRL",
  //   });
  // };

  return (
    <LiBeer>
      <img className="beer" src={image} alt={"name"} />
      <span>Notas</span>

      <span className="title">{name}</span>

      <InfosBeer>
        <div>
          <span className="category">{category}</span>
          <span>{initialPrice}</span>
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
