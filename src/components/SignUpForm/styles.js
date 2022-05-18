import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const Form = styled.div`
  background: var(--grey-0);
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto 10px auto;
  height: 82vh;
  border-radius: 4px;
  border: 1px solid var(--yellow-1);
  box-shadow: 0px 4px 4px rgba(255, 193, 37, 0.25);
  animation: ${appearFromRight} 1s;

  @media (min-width: 420px) {
    width: 400px;
    height: 75vh;
    position: relative;
    top: 5%;
  }

  div {
    text-align: center;

    h1 {
      margin-top: 12px;
      color: var(--yellow-1);
      font-weight: 700;
      line-height: 27px;
      font-size: 25px;
    }
  }

  form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 90%;

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      label {
        color: var(--black);
        font-weight: 600;
        font-size: 13px;
        margin-left: 5px;
        margin-bottom: 1px;
      }

      input {
        background: var(--white);
        color: var(--black);
        border: 1px solid var(--yellow-1);
        border-radius: 4px;
        padding: 0 12px;
        border-radius: 3px;
        height: 25px;
        ::placeholder {
          color: var(--grey-1);
        }

        @media (min-width: 820px) {
          height: 36px;
        }
      }

      .inputError {
        border: 1px solid var(--red);
        ::placeholder {
          color: var(--red);
        }
      }

      .hiddePass {
        position: absolute;
        margin-top: 23px;
        margin-left: 230px;
        color: var(--grey-1);
        font-size: large;

        @media (min-width: 375px) {
          margin-left: 260px;
        }

        @media (min-width: 425px) {
          margin-left: 310px;
        }

        @media (min-width: 820px) {
          margin-top: 28px;
          margin-left: 320px;
        }
      }

      span {
        color: var(--red);
        font-size: 10px;
        margin-left: 5px;
        margin-top: 2px;

        @media (min-width: 820px) {
          font-size: 11px;
        }
      }
    }

    button {
      font-size: 15px;
      font-weight: 500;
      color: var(--black);
      background: var(--yellow-1);
      height: 30px;
      border: 1px solid var(--yellow-1);
      border-radius: 4px;
      :hover {
        background: var(--yellow-0);
        border: 1px solid var(--yellow-0);
      }
    }

    .termsSection {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: center;
      margin-top: 5px;

      label {
        font-size: 11px;
        line-height: 10px;
      }

      button {
        font-size: 11px;
        color: var(--yellow-1);
        background: none;
        border: none;
        height: 3px;
      }
    }

    .loginSection {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 auto -20px auto;

      button {
        margin-left: 5px;
        background: none;
        border: none;
        height: 20px;
        color: var(--yellow-1);
      }
    }
  }
`;
