import Comments from "../../assets/Comments.png";
import { InfosBeer, LiBeer } from "./styles";

function BeerCard({ product }) {
  const { name, initialPrice, category, alcohol, image, rewiews } = product;

  const averagePrice = () => {
    const some = product.price((acc, item) => {
      acc += item.initialPrice;
      return acc;
    }, 0);
    const average = some / initialPrice.length;
    return average.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <LiBeer>
      <img clasName="beer" src={image} alt={"name"} />
      <span>Notas</span>
      <span className="title">{name}</span>
      <InfosBeer>
        <div>
          <span className="category">{category}</span>
          <span>{averagePrice}</span>
          <span className="comments">
            {rewiews.length}
            <img src={Comments} alt="Símbolo de comentário" />
          </span>
        </div>
        <span>Teor: {alcohol}</span>
      </InfosBeer>
    </LiBeer>
  );
}

export default BeerCard;
