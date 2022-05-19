import styled from "styled-components";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  height: 42px;
  background: var(--grey-0);
  border-radius: 4px;
  gap: 5%;
  align-self: center;
  margin: 15px auto;
  padding: 10px 0;

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

  @media (min-width: 1400px) {
    left: 37%;
    max-width: 30%;
    gap: 10%;
  }
`;
export default StyledContainer;
