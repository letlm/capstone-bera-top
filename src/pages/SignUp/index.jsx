import { Container, Content, Background } from "./styles.js";
import Header from "../../components/Header";
import SignUpForm from "../../components/SignUpForm";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

function SignUp() {
  const { authenticated } = useAuth();

  if (authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <Background />
      <Content>
        <Header />
        <SignUpForm />
      </Content>
    </Container>
  );
}

export default SignUp;
