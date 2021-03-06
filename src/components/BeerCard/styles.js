import styled from "styled-components";

export const LiBeer = styled.li`
  width: 95vw;
  max-width: 700px;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  flex-direction: ${(props) => (props.beerPage ? "row" : "column")};
  align-items: center;
  align-self: center;
  background-color: var(--white);
  margin: ${(props) => (props.beerPage ? "10px 0" : "0 10px")};
  box-shadow: ${(props) =>
    props.beerPage ? "" : "10px 9px 42px -20px rgba(0, 0, 0, 0.3)"};
  border-radius: 40px;
  padding: ${(props) => (props.beerPage ? "" : "5px 15px")};

  img {
    height: ${(props) => (props.beerPage ? "125px" : "150px")};
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
    height: 35px;
    border-radius: 20px;
    background-color: var(--yellow-1);
    padding: 2px 6px;
    box-sizing: border-box;
    border: 1px solid var(--yellow-1);
    font-weight: bold;
    font-size: 15px;
    font-family: "Nunito";
  }

  button:hover {
    color: var(--grey-3);
    border: 1px solid var(--yellow-0);
    background-color: var(--yellow-0);
  }

  .title {
    font-size: 15px;
    font-family: "Nunito";
    font-weight: bold;
    overflow: hidden;
    overflow-wrap: break-word;
    text-align: center;
    max-width: ${(props) => (props.beerPage ? "16ch" : "120%")};
    text-overflow: ${(props) => (props.beerPage ? "break-word" : "ellipsis")};
    white-space: ${(props) => (props.beerPage ? "pre-line" : "nowrap")};
  }

  .beerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 70%;
    margin-left: -10px;
  }

  :hover {
    cursor: ${(props) => (props.beerPage ? "default" : "pointer")};
    box-shadow: ${(props) =>
      props.beerPage ? "" : "10px 9px 42px -20px rgba(0, 0, 0, 1)"};
  }

  @media (min-width: 630px) {
    width: ${(props) => (props.beerPage ? "100vw;" : "36vw")};

    section {
      min-width: ${(props) => (props.beerPage ? "270px" : "")};
    }
  }

  @media (min-width: 700px) {
    width: ${(props) => (props.beerPage ? "90vw" : "30vw")};
    max-width: ${(props) => (props.beerPage ? "600px" : "")};

    button {
      height: 35px;
    }

    .beerContainer {
      flex-direction: row;
      max-width: ${(props) => (props.beerPage ? "600px;" : "100%")};
    }

    .title {
      max-width: ${(props) => (props.beerPage ? "150%" : "100%")};
    }
  }

  @media (min-width: 1000px) {
    width: ${(props) => (props.beerPage ? "90vw" : "260px")};
    margin: ${(props) => (props.beerPage ? "10px 0" : "5px 5px")};
  }
`;

export const InfosBeer = styled.div`
  width: ${(props) => (props.beerPage ? "100%" : "221px")};
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
    background-color: ${(props) => (props.beerPage ? "var(--yellow-1)" : "")};
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
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
