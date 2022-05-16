import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-left: -160px;
    text-align: start;
    font-size: 18px;
    margin-bottom: 5px;
  }

  @media (min-width: 500px) {
    h1 {
      margin-left: -180px;
    }
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 20px;
      margin-left: -250px;
    }
  }
`;

export const Form = styled.form`
  width: 290px;
  height: 330px;
  border-radius: 4px;
  background-color: var(--grey-0);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  label {
    width: 250px;
    font-size: 15px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    width: 250px;
    height: 40px;
    border-radius: 8px;
    border: transparent;
  }

  input::placeholder {
    font-family: "Nunito";
    font-weight: bold;
    font-size: 12px;
    color: var(--grey-1);
  }

  button {
    background-color: var(--yellow-1);
    border: transparent;
    border-radius: 4px;
    color: var(--black);
    font-family: "Nunito";
    font-weight: bold;
    font-size: 18px;
    width: 240px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background-color: var(--yellow-0);
  }

  .loader {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    width: 35px;
    height: 35px;
    border: 4px solid var(--yellow-2);
    border-radius: 50px;
    position: relative;
  }

  .loader span {
    display: block;
    background: var(--yellow-2);
  }

  .loader .hour,
  .loader .min {
    width: 4px;
    height: 14px;
    border-radius: 50px;
    position: absolute;
    top: 24.5px;
    left: 11px;
    animation: load9243 1.2s linear infinite;
    transform-origin: top center;
  }

  .loader .min {
    height: 10px;
    animation: load9243 4s linear infinite;
  }

  .loader .circel {
    width: 5px;
    height: 5px;
    border-radius: 50px;
    position: absolute;
    top: 22px;
    left: 11px;
  }

  @keyframes load9243 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .inputError {
    border: 1px solid var(--red);
    ::placeholder {
      color: var(--red);
    }
  }
  span {
    color: var(--red);
    margin-top: -10px;
    font-size: 12px;
  }

  @media (min-width: 500px) {
    width: 314px;
    height: 360px;

    input {
      padding: 10px;
      width: 279px;
      height: 42px;
    }

    input::placeholder {
      font-size: 14px;
    }

    button {
      height: 38px;
    }

    @media (min-width: 640px) {
      width: 390px;
      height: 450px;

      label {
        width: 320px;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: -20px;
      }

      input {
        padding: 10px;
        width: 320px;
        height: 50px;
        border-radius: 8px;
        border: transparent;
      }

      input::placeholder {
        font-size: 16px;
      }

      button {
        height: 40px;
      }
    }
  }
`;
