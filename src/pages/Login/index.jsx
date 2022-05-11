import Logo from "../../assets/Logo.svg";
import { Header, Form, Container, Content, Background } from "./styles";
import { beraTopApi } from "../../services";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../../providers/auth";

function Login() {
    const { authenticated} = useAuth();
    console.log(authenticated)
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

    const handleLogin = async (data) => {
        const response = await beraTopApi.post("/login", data).catch((err) => {
            toast.error("E-mail ou senha inválidos");
        });
        const { user, accessToken } = response.data;
        console.log(accessToken);
        localStorage.clear();
        localStorage.setItem("@BeraTop-Token", JSON.stringify(accessToken));
        localStorage.setItem("@BeraTop-User", JSON.stringify(user.id));
        toast.success("Login realizado com sucesso");
        console.log(authenticated)
        history.push("/");
    };

    const handleNavigation = (path) => {
        return history.push(path);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }
    return (
        <Container>
            <Content>
                <Header>
                    <div className="logo">
                        <h1>BeraTop</h1>
                        <img src={Logo} alt="logo"></img>
                    </div>
                    <button onClick={() => handleNavigation("/")}>Voltar</button>
                </Header>
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
                                type="password"
                                placeholder="Digite aqui sua senha"
                                {...register("password")}
                                className={`${errors.password ? "inputError" : ""}`}
                            />
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                    <div className="signUpSection">
                        <p>Ainda não possui uma conta?</p>
                        <button onClick={() => handleNavigation("/signup")}>Cadastre-se</button>
                    </div>
                </Form>
            </Content>
            <Background/>
        </Container>
    );
}

export default Login;
