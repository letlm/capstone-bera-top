import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ApiContext } from "../../providers/ApiProvider";
import Modal from "react-modal";
import { CloseButton, Container, ContentModal } from "./styles";
import { useAuth } from "../../providers/AuthProvider";
import { useModal } from "../../providers/ModalProvider";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

function ModalComponent({ isEdited = false, modal, edit = "add" }) {
  const { addReview, editReview } = useContext(ApiContext);
  const { handleCloseModal, editBeer } = useModal();

  const token = JSON.parse(localStorage.getItem("@BeraTop-Token"));
  const userId = JSON.parse(localStorage.getItem("@BeraTop-User"));
  const bierId = useParams();

  const { authenticated } = useAuth();

  const schema = yup.object().shape({
    comment: yup.string().required(" Campo obrigatório"),
    price: yup.string().required(" Campo obrigatório"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setValue("comment", editBeer.comment);
    setValue("price", editBeer.price);
    setValue("stars", editBeer.stars);
  }, [editBeer, setValue]);

  const onSubmit = (object) => {
    object.userId = userId;
    object.productId = Number(bierId.id);
    addReview(token, object);
    handleCloseModal();
  };

  const onSubmitEdit = (object) => {
    editReview(editBeer.id, token, object, editBeer.productId);
    handleCloseModal("edit");
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgb(0 0 0 / 37%)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      border: "none",
      padding: 0,
    },
  };

  return (
    <div>
      {!authenticated ? (
        <Modal
          isOpen={modal}
          onRequestClose={() => handleCloseModal(edit)}
          style={customStyles}
        >
          <ContentModal>
            <CloseButton onClick={handleCloseModal}> X </CloseButton>
            <h3>
              Ops, você não está logado! Faça seu login ou cadastre-se para
              deixar uma avaliação
            </h3>
            <div>
              <a href="/signup">Cadastre-se</a>
              <a href="/login">Login</a>
            </div>
          </ContentModal>
        </Modal>
      ) : (
        <Modal
          isOpen={modal}
          onRequestClose={() => handleCloseModal(edit)}
          style={customStyles}
        >
          <Container>
            <CloseButton onClick={() => handleCloseModal(edit)}>
              {" "}
              X{" "}
            </CloseButton>
            <form
              onSubmit={
                isEdited ? handleSubmit(onSubmitEdit) : handleSubmit(onSubmit)
              }
            >
              <section>
                <label>Comentário: </label>
                <textarea name="comment" type="text" {...register("comment")} />
                <span className="error">{errors.comment?.message}</span>
              </section>

              <div>
                <section>
                  <label>Nota: </label>
                  <select name="stars" {...register("stars")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </section>

                <section>
                  <label>Preço:</label>
                  <input
                    name="price"
                    type="number"
                    {...register("price")}
                    min="0"
                  />
                  <span className="error">{errors.price?.message}</span>
                </section>
              </div>
              {isEdited ? (
                <div>
                  <button type="submit">Editar</button>
                </div>
              ) : (
                <button type="submit">Enviar Avaliação</button>
              )}
            </form>
          </Container>
        </Modal>
      )}
    </div>
  );
}

export default ModalComponent;
