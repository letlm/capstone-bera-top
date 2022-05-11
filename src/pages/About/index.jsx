import { TitlePage, ParagraphOne, ParagraphTwo, Container } from "./styles";
import BeerImage from "../../assets/BeerImage79x74.png"
import Feedback from "../../assets/necessidade46x55.png"
import Proposito from "../../assets/proposito46x55.png"
import { useAuth } from "../../providers/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";

function About(){

    const history = useHistory();
    const { authenticated } = useAuth();
    // const authenticated = true
    const [textButton, setTextButton] = useState("Login");

    useEffect(()=>{
        if(authenticated){
            setTextButton("Logout");
        }else{
            setTextButton("Login")
        }
    }, [authenticated]);
    
    

    return(
        <Container>
            {/* <Header>
                <div className="logo" onClick={()=> history.push("/")} >
                    <h1>BeraTop</h1>
                    <img src={Logo} alt="Logo da BeraTop"></img>
                </div>
                <button onClick={ ()=> history.push("/login") } >{textButton}</button>
            </Header> */}
            <Header bgColor={"#c4c4c4"}>
                
            </Header>
            <div>
                <div>
                    <TitlePage>
                        <p>Sobre a</p>
                        <p>BeraTop <img src={BeerImage} alt="Logo da BeraTop"></img></p>
                    </TitlePage>
                    <ParagraphOne>
                        <p>
                            Sua necessidade:
                            Ter um feedback sobre diversas marcas, tamanhos, teores e modelos de cervejas.
                        </p>
                        <img src={Feedback} alt="feedback do cliente" ></img>
                    </ParagraphOne>

                    <ParagraphTwo>
                        <img src={Proposito} alt="proposito" ></img>
                        <p>
                            Nosso propósito:
                            Te ajudar a poupar seu precioso tempo ao escolher aquela cerveja que tanto pensou em experimentar.
                        </p>
                    </ParagraphTwo>
                </div>



            </div>
            
        </Container>
    )
}

export default About;