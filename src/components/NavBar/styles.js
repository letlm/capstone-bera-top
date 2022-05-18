import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  background-color: #fff;
  margin: 25px 0px;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button,
  select {
    border: 1px solid var(--yellow-1);
    color: var(--yellow-1);
    background-color: var(--grey-0);
    border-radius: 4px;

    padding: 10px 50px;
    font-family: "Nunito";
    font-weight: bolder;
    font-size: 1rem;
    margin: 5px;
  }
`;
