import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  font-size: 14px;
  background: var(--grey-0);
  border-radius: 4px;
  max-width: 654px;
  border: 1px solid var(--yellow-1);

  p {
    font-weight: bold;
    padding: 10px;
  }

  span {
    font-weight: 400;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 5px 0 0;

  .ratingAndPrice {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .commentEdit {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-right: 10px;
  gap: 5px;

  button {
    color: var(--yellow-1);
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    border-radius: 4px;
    border: 1px solid var(--grey-2);
  }
`;

export const Star = styled.div`
  input[type="radio"] {
    display: none;
  }

  .star {
    cursor: pointer;
    transition: color 200ms;
  }
`;
