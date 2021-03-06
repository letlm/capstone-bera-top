import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  padding: 20px 5%;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background-color: ${(props) =>
    props.bgColor ? "var(--grey-0)" : "var(--white)"};
  box-shadow: ${(props) => (props.bgColor ? "0 2px #C4C4C4" : "")};

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;

    h1 {
      color: var(--yellow-1);
      font-weight: 700;
    }

    img {
      width: 50px;
      height: 50px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }

  button {
    width: 80px;
    height: 27px;
    background: var(--grey-0);
    color: var(--yellow-1);
    padding: 0px;
    border-radius: 4px;
    border: 1px solid var(--yellow-1);
    font-weight: 800;
    line-height: 23px;

    :hover {
      background: var(--grey-1);
    }
  }
`;
export default HeaderStyled;
