import styled from "styled-components";
import BackgroundBeerTop from "../../assets/BackgroundBeerTop.svg";

export const Content = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${BackgroundBeerTop}) no-repeat center, var(--grey-0);
    display: flex;

    div {
      display: flex;
      align-items: center;
      margin: 0 auto;

      h1 {
        font-weight: 600;
        font-size: 80px;
        letter-spacing: 2px;
        color: var(--yellow-1);
      }

      img {
        width: 200px;
        height: 200px;
      }
    }
  }
`;
