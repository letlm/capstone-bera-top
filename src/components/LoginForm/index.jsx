import { Form } from "./styles";
import { beraTopApi } from "../../services";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function FormLogin() {
  const { setAuthenticated } = useAuth();
  const [typePassword, setTypePassword] = useState("password");
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleChange = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  const handleLogin = async (data) => {
    const response = await beraTopApi.post("/login", data).catch((err) => {
      toast("❌ E-mail ou senha inválidos!", {
        className: "toastify-color-progress-error",
      });
    });
    const { user, accessToken } = response.data;

    localStorage.clear();
    localStorage.setItem("@BeraTop-Token", JSON.stringify(accessToken));
    localStorage.setItem("@BeraTop-User", JSON.stringify(user.id));
    setAuthenticated(true);
    toast("🍺 Login realizado com sucesso!", {
      className: "toastify-color-progress-success",
    });
    history.push("/");
  };

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Form>
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
            className={`${errors.email ? "inputError" : ""}`}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Senha</label>
          <input
            type={typePassword}
            placeholder="Digite aqui sua senha"
            {...register("password")}
            className={`${errors.password ? "inputError" : ""}`}
          />
          <p onClick={() => handleChange()}>
            {typePassword === "password" ? (
              <AiFillEye />
            ) : (
              <AiFillEyeInvisible />
            )}
          </p>

          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div className="signUpSection">
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => handleNavigation("/signup")}>Cadastre-se</button>
      </div>
    </Form>
  );
}

export default FormLogin;
