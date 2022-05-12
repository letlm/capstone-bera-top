import { Container, Content, Background } from "./styles.js";
import Header from "../../components/Header";
import SignUpForm from "../../components/SignUpForm";

function SignUp() {
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
