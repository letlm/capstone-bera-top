import styled from "styled-components";

export const LiBeer = styled.li`
  width: 80vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props.beerPage ? "row" : "column")};
  align-items: center;
  margin: ${(props) => (props.beerPage ? "10px 0" : "0 10px")};
  padding: ${(props) => (props.beerPage ? "10px" : "0")};
  background-color: var(--white);

  img {
    height: 150px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }

  button {
    width: 160px;
    max-width: 150%;
    height: 20px;
    border-radius: 20px;
    background-color: #ffc125;
    padding: 2px 6px;
    box-sizing: border-box;
    border: 1px solid #ffc125;
    font-weight: bold;
    font-size: 14px;
  }

  .title {
    font-size: 15px;
    font-family: "Nunito";
    font-weight: bold;
    max-width: ${(props) => (props.beerPage ? "150%" : "100%")};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .beerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50%;
    margin: auto;
  }

  :hover {
    cursor: ${(props) => (props.beerPage ? "default" : "pointer")};
    box-shadow: ${(props) =>
      props.beerPage ? "" : "10px 9px 42px -20px rgba(0, 0, 0, 0.55)"};
  }

  @media (min-width: 700px) {
    width: 90vw;

    button {
      height: 20px;
    }
    .beerContainer {
      flex-direction: row;
      max-width: 80%;
    }
  }
`;

export const InfosBeer = styled.div`
  width: 221px;
  height: 42px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 13px;
  font-family: "Nunito";

  .category {
    font-weight: bold;
    font-size: 14px;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: fit-content;
    background-color: ${(props) => (props.beerPage ? "#FFC125" : "")};
    border-radius: ${(props) => (props.beerPage ? "20px" : 0)};
    padding: ${(props) => (props.beerPage ? "2px 6px" : 0)};
  }

  img {
    margin: 0;
    width: 17px;
    height: 17px;
  }

  .comments {
    width: 30px;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  div {
    width: 221px;
    display: flex;
    justify-content: space-around;
  }
`;
