import Logo from "../../assets/Logo.svg";
import { Header, Form, Container, Content, Background } from "./styles.js";
import { beraTopApi } from "../../services";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../../providers/auth";
import { useState } from "react";
import TermsModal from "../../components/TermsModal";

function SignUp() {
    const { authenticated } = useAuth();

    const [showModal, setShowModal] = useState(false);

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Nome obrigatório")
            .min(3, "Mínimo 3 caracteres")
            .max(30, "Máximo 30 caracteres")
            .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "O nome deve conter apenas letras."),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        confirmEmail: yup
            .string()
            .required("E-mail obrigatório")
            .oneOf([yup.ref("email")], "Os e-mails não conferem"),
        password: yup
            .string()
            .required("Senha obrigatória")
            .min(6, "Mínimo 6 caracteres")
            .max(16, "Máximo 16 caracteres")
            .matches(
                "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$",
                "A senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
            ),
        confirmPassword: yup
            .string()
            .required("Senha obrigatória")
            .oneOf([yup.ref("password")], "As senhas não conferem"),
        ageVerify: yup.bool().default(false).oneOf([true], "É preciso ter mais de 18 anos para realizar o cadastro"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const history = useHistory();

    const handleSignUp = (data) => {
        console.log(data);

        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
        };

        beraTopApi
            .post("/users", userData)
            .then((response) => {
                toast.success("Conta criada com sucesso");
                history.push("/login");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Erro ao criar a conta");
            });
    };

    const handleNavigation = (path) => {
        return history.push(path);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }

    const handleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <Container>
            <Background />
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
                        <h1>Cadastro</h1>
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div>
                            <label>Nome</label>
                            <input
                                type="text"
                                placeholder="Digite aqui seu nome"
                                {...register("name")}
                                className={`${errors.name ? "inputError" : ""}`}
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>
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
                            <label>Confirmar e-mail</label>
                            <input
                                type="email"
                                placeholder="Confirme seu e-mail"
                                {...register("confirmEmail")}
                                className={`${errors.confirmEmail ? "inputError" : ""}`}
                            />
                            {errors.email && <span>{errors.confirmEmail.message}</span>}
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
                        <div>
                            <label>Confirmar senha</label>
                            <input
                                type="password"
                                placeholder="Confirme sua senha"
                                {...register("confirmPassword")}
                                className={`${errors.confirmPassword ? "inputError" : ""}`}
                            />
                            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="termsSection">
                            <input type="checkbox" {...register("ageVerify")} className={`${errors.ageVerify ? "inputError" : ""}`} />
                            <div>
                                <label>
                                    Declaro que tenho mais de 18 anos e estou de acordo com os{" "}
                                    <button onClick={() => handleModal()}>termos de compromisso!</button>
                                </label>
                                {errors.ageVerify && <span>{errors.ageVerify.message}</span>}
                            </div>
                        </div>

                        <button type="submit">Cadastrar</button>
                        <div className="loginSection">
                            <p>Já possui cadastro? Faça seu </p>
                            <button onClick={() => handleNavigation("/login")}>login</button>
                        </div>
                    </form>
                    {showModal && <TermsModal setShowModal={setShowModal} />}
                </Form>
            </Content>
        </Container>
    );
}

export default SignUp;
