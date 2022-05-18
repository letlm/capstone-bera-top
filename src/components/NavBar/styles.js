import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 35px;

  button {
    margin: 5px;
    width: 100px;
    border: 1px solid var(--yellow-1);
    color: var(--yellow-1);
    background-color: var(--grey-0);
    border-radius: 8px;
    font-family: "Nunito";
    font-weight: bolder;
    font-size: 1rem;
    height: 30px;
  }

  button:hover {
    background-color: var(--yellow-1);
    color: var(--grey-0);
  }

  .dropbtn {
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    border: 1px solid var(--yellow-1);
    color: var(--yellow-1);
    background-color: var(--grey-0);
    border-radius: 8px;
    height: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Nunito";
    font-weight: bolder;
    font-size: 1rem;
    width: 90px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--grey-0);
    min-width: 90px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    height: 80px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar-track {
      background-color: var(--grey-0);
    }

    ::-webkit-scrollbar {
      width: 2px;
      background-color: var(--grey-1);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--grey-1);
    }
  }

  .dropdown-content .select {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 30px;
    color: var(--black);
    font-weight: 500;
    text-align: left;
    border: none;
    display: block;
    padding: 2px;
    text-align: center;
  }

  .dropdown-content .select:hover {
    font-weight: 900;
    background-color: var(--grey-0);
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: var(--yellow-1);
    color: var(--grey-0);
  }

  @media (min-width: 768px) {
    height: 40px;

    button {
      height: 40px;
    }

    .dropbtn {
      height: 40px;
      padding: 10px 50px;
      width: 100px;
    }

    .dropdown-content {
      height: 90px;
    }

    .dropdown-content .select {
      width: 100px;
      height: 40px;
    }
  }
`;
export default Container;
