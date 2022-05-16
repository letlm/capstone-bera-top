import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Modal from "react-modal";
import { CloseButton, Container } from "./styles";
import Button from "../Button";
import { useAuth } from "../../providers/auth";
import { useHistory } from "react-router-dom";
import { useModal } from "../../providers/ModalProvider";

function ModalComponent({ isEdited = false }) {
  const { modalIsOpen, handleCloseModal } = useModal();

  const { authenticated } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    comment: yup.string().required(" Campo obrigatório"),
    price: yup.string().required(" Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(object) {
    console.log(object);
  }

  function onSubmitEdit(object) {
    console.log("teste");
  }

  function onSubmitDel(id) {
    console.log("teste");
  }

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
      {authenticated ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <Container>
            <h2>
              Ops, você não está logado! Faça seu login ou cadastre-se para
              deixar uma avaliação
            </h2>
            <div>
              <Button onClick={history.push("/signup")}>Cadastre-se</Button>
              <Button onClick={history.push("/login")}>Login</Button>
            </div>
          </Container>
        </Modal>
      ) : (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <Container>
            <CloseButton onClick={handleCloseModal}> X </CloseButton>
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
                  <select name="rating" {...register("rating")}>
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
                  {" "}
                  <Button onClick={(event) => onSubmitDel(event.id)}>
                    Deletar
                  </Button>{" "}
                  <Button type="submit">Editar</Button>
                </div>
              ) : (
                <Button type="submit">Enviar Avaliação</Button>
              )}
            </form>
          </Container>
        </Modal>
      )}
    </div>
  );
}

export default ModalComponent;
