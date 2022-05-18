import styled from "styled-components";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  height: 42px;
  background: var(--grey-0);
  border-radius: 4px;
  position: absolute;
  top: 14%;
  gap: 5%;
  align-self: center;

  img {
    cursor: pointer;
    width: 30px;
  }

  input {
    margin-left: 10px;
    border-style: none;
    background: var(--grey-0);
    width: 80%;
    outline: none;
  }

  @media (min-width: 768px) {
    top: 12%;
  }

  @media (min-width: 1100px) {
    background: var(--white);
    max-width: 280px;
    top: 2.5%;
    left: 42%;
    input {
      background: var(--white);
    }
  }

  @media (min-width: 1400px) {
    left: 37%;
    max-width: 30%;
    gap: 10%;
  }
`;
export default StyledContainer;
