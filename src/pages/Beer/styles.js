import styled from "styled-components";

export const BeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc((100vh) - (165px));
  max-width: 600px;

  @media (min-width: 630px) {
    margin: auto;
  }

  .pageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProductDescription = styled.div`
  padding: 10px 10px;
  margin: 4px 10px;
  background-color: var(--grey-0);
  border-radius: 4px;
  max-width: 600px;
  align-self: center;

  p {
    font-size: 13px;
    letter-spacing: 0.7px;
  }
`;
