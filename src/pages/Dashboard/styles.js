import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Context = styled.ul`
  margin: 0 auto;
  width: 310px;
  height: 305px;
  display: flex;
  background-color: var(--grey-2);
  border: 1px solid var(--grey-1);
  border-radius: 4px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  overflow-x: auto;

  ::-webkit-scrollbar-track {
    background-color: var(--grey-0);
  }

  ::-webkit-scrollbar {
    height: 5px;
    background: var(--grey-0);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--grey-2);
  }

  @media (min-width: 630px) {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 620px;
    height: 500px;
    justify-content: space-evenly;
  }

  @media (min-width: 1000px) {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 920px;
    height: 500px;
    justify-content: space-evenly;
  }

  @media (min-width: 1224px) {
    width: 1100px;
  }
`;
