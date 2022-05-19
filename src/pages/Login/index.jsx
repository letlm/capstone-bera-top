import { Container, Content, Background } from "./styles";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

function Login() {
  const { authenticated } = useAuth();

  if (authenticated) {
    return <Redirect to="/" />;
  }
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
