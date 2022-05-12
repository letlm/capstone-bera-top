import { ContainerDev } from "./styles"
import Balcao from "../../assets/balcao-de-bar.png"
import { TableOnTheLeft, TableOnTheRight } from "./styles";
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"


function InfoDevs({position, dev1, dev2}){

    

    return(
        <ContainerDev>
            {
                position === "left" ?
                    <TableOnTheLeft>
                        <div className="barTable">
                            <img src={Balcao} alt="balcão" />
                            <img src={dev1.image} alt="Leonardo" />
                            <img src={dev2.image} alt="Jhon" />
                        </div>

                        <div className="containerDevs">
                            <div className="infoDevs">
                                <p className="nameDev">{dev1.name}</p>
                                <p className="workDev">{dev1.work}</p>
                                <p>
                                    <img className="contact-media" src={Linkedin} alt="linkedin" />
                                    <img className="contact-media" src={Github} alt="github" />
                                </p>
                            </div>
                            <div className="infoDevs">
                                <p className="nameDev">{dev2.name}</p>
                                <p className="workDev">{dev2.work}</p>
                                <p>
                                    <img className="contact-media" src={Linkedin} alt="linkedin" />
                                    <img className="contact-media" src={Github} alt="github" />
                                </p>
                            </div>
                        </div>
                    </TableOnTheLeft> 
              
                :

                    <TableOnTheRight>
                        

                        <div className="containerDevs">
                            <div className="infoDevs">
                                <p className="nameDev">{dev1.name}</p>
                                <p className="workDev">{dev1.work}</p>
                                <p className="media">
                                    <img className="contact-media" src={Linkedin} alt="linkedin" />
                                    <img className="contact-media" src={Github} alt="github" />
                                </p>
                            </div>
                            <div className="infoDevs">
                                <p className="nameDev">{dev2.name}</p>
                                <p className="workDev">{dev2.work}</p>
                                <p className="media" >
                                    <img className="contact-media" src={Linkedin} alt="linkedin" />
                                    <img className="contact-media" src={Github} alt="github" />
                                </p>
                            </div>
                        </div>

                        <div className="barTable">
                            <img src={Balcao} alt="balcão" />
                            <img src={dev1.image} alt="Leonardo" />
                            <img src={dev2.image} alt="Jhon" />
                        </div>
                    </TableOnTheRight>
          }
        </ContainerDev>
    )
}

export default InfoDevs;