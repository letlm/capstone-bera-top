import { ButtonComp } from "./styles";

function Button({ children, onClick, className }) {
  return (
    <ButtonComp className={className} onClick={onClick}>
      {children}
    </ButtonComp>
  );
}

export default Button;
