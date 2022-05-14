import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: -50px;
  align-self: center;
  border: 1px solid var(--grey-0);
  width: 90%;
  max-width: 400px;
  display: flex;
  gap: 6%;
  height: 42px;
  background: var(--grey-0);
  border-radius: 4px;

  img {
    cursor: pointer;
  }

  input {
    margin-left: 10px;
    border-style: none;
    background: var(--grey-0);
    width: 80%;
    outline: none;
  }

  @media (min-width: 630px) {
    max-width: 450px;
    margin: 6px;
  }

  @media (min-width: 768px) {
    max-width: 640px;
  }

  @media (min-width: 1100px) {
    margin-top: -145px;
    background: var(--white);
    max-width: 280px;
    margin-left: 45px;

    input {
      background: var(--white);
    }
  }

  @media (min-width: 1400px) {
    max-width: 420px;
  }
`;
