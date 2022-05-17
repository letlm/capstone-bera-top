import { ContainerDev } from "./styles";
import Balcao from "../../assets/BalcaoDeBar.png";
import { TableOnTheLeft, TableOnTheRight } from "./styles";
import Linkedin from "../../assets/Linkedin.png";
import Github from "../../assets/Github.png";
import UserIcon from "../../assets/user.png"
import ProductOwner from "../../assets/productOwner.png"
import Scrum from "../../assets/scrum.png"
import Assurance from "../../assets/assurance.png"
import TechLeader from "../../assets/techLeader.png"

function InfoDevs({ position, dev1, dev2 }) {
  const baseUrlLinkedin = "https://www.linkedin.com/in";
  const baseUrlGithub = "https://www.github.com";

  return (
    <ContainerDev>
      {position === "left" ? (
        <TableOnTheLeft>
          <div className="barTable">
            <img src={Balcao} alt="balcão" />
            <img src={dev1.image} alt="Leonardo" />
            <img src={dev2.image} alt="Jhon" />
          </div>

          <div className="containerDevs">
            <div className="infoDevs">
              
              <p className="nameDev">
                <img className="icon-user" src={UserIcon} alt="icon-user"></img>
                {dev1.name}
                </p>
              <p className="workDev">
                {dev1.work === "Quality Assurance" && <img className="icon-assurance" src={Assurance} alt="assurance"></img>}
                {dev1.work}
              </p>
              <p>
                <a href={`${baseUrlLinkedin}${dev1.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <img
                    className="contact-media"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </a>
                <a href={`${baseUrlGithub}${dev1.github}`} target="_blank" rel="noopener noreferrer">
                  <img className="contact-media" src={Github} alt="github" />
                </a>
              </p>
            </div>
            <div className="infoDevs">
              <p className="nameDev">
                {dev2.name}
                <img className="icon-user" src={UserIcon} alt="icon-user"></img>
              </p>
              <p className="workDev">
                {dev2.work}
                {dev2.work === "Quality Assurance" && <img className="icon-assurance" src={Assurance} alt="assurance"></img>}
                {dev2.work === "Scrum Master" && <img className="icon-scrumMaster" src={Scrum} alt="scrumMaster"></img>}
              </p>
              <p>
                <a href={`${baseUrlLinkedin}${dev2.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <img
                    className="contact-media"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </a>
                <a href={`${baseUrlGithub}${dev2.github}`} target="_blank" rel="noopener noreferrer">
                  <img className="contact-media" src={Github} alt="github" />
                </a>
              </p>
            </div>
          </div>
        </TableOnTheLeft>
      ) : (
        <TableOnTheRight>
          <div className="containerDevs">
            <div className="infoDevs">
              <p className="nameDev">
                {dev1.name}
                <img className="icon-user" src={UserIcon} alt="icon-user"></img>              
              </p>
              <p className="workDev">
                {dev1.work}
                {dev1.work === "Product Owner" && <img className="icon-productOwner" src={ProductOwner} alt="productOwner"></img>}
              </p>
              <p className="media">
                <a href={`${baseUrlLinkedin}${dev1.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <img
                    className="contact-media"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </a>
                <a href={`${baseUrlGithub}${dev1.github}`} target="_blank" rel="noopener noreferrer">
                  <img className="contact-media" src={Github} alt="github" />
                </a>
              </p>
            </div>
            <div className="infoDevs">
              <p className="nameDev">
              <img className="icon-user" src={UserIcon} alt="icon-user"></img>
                {dev2.name}
              </p>
              <p className="workDev">
                {dev2.work === "Tech Leader" && <img className="icon-techLeader" src={TechLeader} alt="techLeader"></img>}
                {dev2.work}
              </p>
              <p className="media">
                <a href={`${baseUrlLinkedin}${dev2.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <img
                    className="contact-media"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </a>
                <a href={`${baseUrlGithub}${dev2.github}`} target="_blank" rel="noopener noreferrer">
                  <img className="contact-media" src={Github} alt="github" />
                </a>
              </p>
            </div>
          </div>

          <div className="barTable">
            <img src={Balcao} alt="balcão" />
            <img src={dev1.image} alt="Leonardo" />
            <img src={dev2.image} alt="Jhon" />
          </div>
        </TableOnTheRight>
      )}
    </ContainerDev>
  );
}

export default InfoDevs;
