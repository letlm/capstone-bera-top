import { Container, Form } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { beraTopApi } from "../../services";
import { useState } from "react";

function RecomendationForm() {
  const [removeLoading, setRemoveLoading] = useState(true);
  const [token] = useState(JSON.parse(localStorage.getItem("@BeraTop-Token")));
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSuggest = ({ name, category, email }) => {
    const beraRecommendation = { name, category, email };
    beraTopApi
      .post("/recommendations", beraRecommendation, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setRemoveLoading(false);
        setTimeout(() => {
          setRemoveLoading(true);
          toast(
            "🍻 Agradecemos a sugestão! Logo a Bera estará no nosso catálogo!",
            {
              className: "toastify-color-progress-light",
            }
          );
          setValue("name", "");
          setValue("category", "");
          setValue("email", "");
        }, 700);
      })
      .catch(() => {
        setRemoveLoading(false);
        setTimeout(() => {
          setRemoveLoading(true);
          toast(
            "❌ Você precisa ter uma conta e estar logado para recomendar!",
            {
              className: "toastify-color-progress-error",
            }
          );
          setValue("name", "");
          setValue("category", "");
          setValue("email", "");
        }, 1000);
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
        <button>
          {!removeLoading ? (
            <div class="loader">
              <span className="hour"></span>
              <span className="min"></span>
              <span className="circel"></span>
            </div>
          ) : (
            <>Cheers</>
          )}
        </button>
      </Form>
    </Container>
  );
}

export default RecomendationForm;
