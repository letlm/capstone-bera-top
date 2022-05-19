import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Context = styled.ul`
  margin: 0 auto;
  margin-top: 15px;
  width: 310px;
  height: 350px;
  display: flex;
  background-color: var(--white);
  border: none;
  border-radius: 4px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  overflow-x: auto;

  ::-webkit-scrollbar-track {
    background-color: var(--grey-0);
  }

  ::-webkit-scrollbar {
    background: var(--grey-0);
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: var(--yellow-1);
  }

  @media (min-width: 630px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 620px;
    height: 500px;
    justify-content: space-evenly;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 720px;
    height: 500px;
    justify-content: space-evenly;
  }

  @media (min-width: 1224px) {
    width: 1100px;
  }
`;
