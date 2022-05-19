import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../../assets/Comments.png";
import { InfosBeer, LiBeer } from "./styles";
import StarRatingAvarage from "../StarRatingAvarage";
import ModalComponent from "../Modal";
import {  useModal } from "../../providers/ModalProvider";

function BeerCard({ product, beerPage }) {
  const { handleOpenModal, modalIsOpen, handleCloseModal } = useModal();
  const { name, initialPrice, category, alcohol, image, reviews } = product;

  const averagePrice = () => {
    const sum =
      reviews &&
      reviews.reduce((previousValue, currentValue) => {
        return previousValue + Number(currentValue.price);
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

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <LiBeer
      beerPage={beerPage}
      onClick={() => handleNavigation(`/${product.id}`)}
    >
      <img className="beer" src={image} alt={"name"} />

      <div className="beerContainer">
        <section>
          <StarRatingAvarage reviews={reviews} />
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
          <ModalComponent isEdited={false} modal={modalIsOpen} modalClose={handleCloseModal}/>
        </section>
        {beerPage && (
          <button onClick={handleOpenModal}>Escrever Avaliação</button>
        )}
      </div>
    </LiBeer>
  );
}

export default BeerCard;
