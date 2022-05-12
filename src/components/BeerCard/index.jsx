import Comments from "../../assets/Comments.png";
import { InfosBeer, LiBeer } from "./styles";

function BeerCard({ product, beerPage }) {
  const { name, initialPrice, category, alcohol, image, reviews, description } =
    product;

  const deviceWidth = window.innerWidth;

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
    <LiBeer beerPage={beerPage}>
      <img className="beer" src={image} alt={"name"} />
      <div className="beerContainer">
        <section>
          <span>Notas</span>
          <span className="title">{name}</span>
          <InfosBeer beerPage={beerPage}>
            <div>
              <span className="category">{category}</span>
              <span>{averagePrice()}</span>
              <span className="comments">
                {reviews.length}
                <img src={Comments} alt="Símbolo de comentário" />
              </span>
            </div>
            <span>Teor: {alcohol}</span>
          </InfosBeer>
        </section>
        {beerPage && <button>Escrever Avaliação</button>}
        {beerPage && deviceWidth < 700 && <p>Resumo: {description}</p>}
      </div>
    </LiBeer>
  );
}

export default BeerCard;
