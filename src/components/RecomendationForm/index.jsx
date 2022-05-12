import { Container, Form } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

function RecomendationForm() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSuggest = () => {
    toast("🍻 Agradecemos a sugestão! Logo a Bera estará no nosso catálogo!", {
      className: "toastify-color-progress-light",
    });
  };

  return (
    <Container>
      <h1>Recomenda aí,</h1>
      <Form onSubmit={handleSubmit(handleSuggest)}>
        <label>Nome da Bera:</label>
        <input
          type="text"
          placeholder="Digite o nome daquela BeraTop"
          {...register("name")}
          className={`${errors.name ? "inputError" : ""}`}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <label>Categoria:</label>
        <input
          type="text"
          placeholder="Categoria da Bera"
          {...register("category")}
          className={`${errors.category ? "inputError" : ""}`}
        />
        {errors.category && <span>{errors.category.message}</span>}
        <label>Seu email:</label>
        <input
          type="email"
          placeholder="Avisaremos quando a Bera for incluída"
          {...register("email")}
          className={`${errors.email ? "inputError" : ""}`}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <button>Cheers</button>
      </Form>
    </Container>
  );
}

export default RecomendationForm;
