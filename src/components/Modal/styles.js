import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 43vh;
  background-color: var(--white);
  @media (min-width: 320px) {
    width: 90vw;
  }

  @media (min-width: 768px) {
    width: 50vw;
  }

  @media (min-width: 1024px) {
    width: 33vw;
  }

  @media (min-width: 1400px) {
    width: 450px;
  }

  .error {
    font-size: 0.8rem;
    color: red;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 13px;
  }

  button {
    background-color: var(--yellow-1);
    border: none;
    padding: 0.6rem 4rem;
    border-radius: 4px;
    font-family: "Nunito";
    font-weight: bolder;
    font-size: 1rem;
  }

  button:hover {
    background: var(--yellow-0);
    border: 1px solid var(--yellow-0);
  }

  input,
  select,
  textarea {
    background-color: var(--grey-0);
    border: none;
    border-radius: 4px;
  }

  label {
    font-family: "Nunito";
    font-weight: bolder;
    margin-bottom: 5px;
  }

  select {
    padding: 10px;
  }

  select,
  input {
    height: 2.2rem;
    width: 8rem;
  }

  textarea {
    height: 17vh;
  }
  @media (min-width: 320px) {
    textarea {
      width: 80vw;
    }
  }
  @media (min-width: 768px) {
    textarea {
      width: 45vw;
    }
  }
  @media (min-width: 1024px) {
    textarea {
      width: 30vw;
    }
  }

  @media (min-width: 1400px) {
    textarea {
      width: 390px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
  }

  div {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 320px) {
    div {
      gap: 10px;
    }
  }

  @media (min-width: 768px) {
    div {
      gap: 25px;
    }
  }

  @media (min-width: 1024px) {
    div {
      gap: 30px;
    }
  }
  @media (min-width: 1400px) {
    div {
      gap: 70px;
    }
  }
`;

export const ContentModal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
  padding: 25px;
  align-items: center;
  width: 90vw;

  a {
    text-decoration: none;
    padding: 8px 20px;
    background-color: var(--yellow-1);
    border-radius: 4px;
    color: black;
    width: 15vw;
    font-family: "Nunito";
    font-weight: bolder;
    text-align: center;
    margin: 5px;
  }

  h3 {
    margin-bottom: 15px;
    text-align: center;
    font-size: 1.1rem;
  }
  @media (min-width: 768px) {
    width: 60vw;
  }

  @media (min-width: 1024px) {
    width: 40vw;
  }

  @media (min-width: 1400px) {
    width: 35vw;
    padding: 30px;
  }
`;
export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 5px;
  border-radius: 4px;
  font-weight: bolder;
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
