import styled from "styled-components";

export const LiBeer = styled.li`
  width: 230px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 150px;
  }

  .title {
    font-size: 15px;
    font-family: "Nunito";
    font-weight: bold;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :hover {
    cursor: pointer;
    box-shadow: 10px 9px 42px -20px rgba(0, 0, 0, 0.55);
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
