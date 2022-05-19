import styled from "styled-components";

export const Container = styled.div`
  background: var(--grey-2);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  border: 2px solid var(--black);
  margin-top: 50px;
  background: var(--white);
  width: 90%;
  height: 80%;
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const Text = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 13px;
  }

  p {
    font-size: 12px;
  }

  a {
    color: var(--yellow-1);
  }

  button {
    width: 75px;
    height: 25px;
    background: var(--yellow-1);
    border: 1px solid var(--yellow-1);
    border-radius: 4px;
    :hover {
      background: var(--yellow-0);
      border: 1px solid var(--yellow-0);
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }
  }
`;
