import { Container, Content, Background } from "./styles";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

function Login() {
    return (
        <Container>
            <Content>
                <Header />
                <LoginForm />
            </Content>
            <Background />
        </Container>
    );
}

export default Login;
