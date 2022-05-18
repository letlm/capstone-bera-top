import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .part-two {
    height: 550px;
  }

  @media (min-width: 400px) {
    width: 400px;
  }

  @media (min-width: 768px) {
    .part-one {
      margin-top: 60px;
      width: 768px;

      display: grid;
      .item-one {
        grid-area: title;
      }
      .item-two {
        grid-area: paragraphOne;
      }
      .item-three {
        grid-area: paragraphTwo;
      }

      grid-template-areas:
        "title title"
        "paragraphOne paragraphTwo";
    }

    .part-two {
      width: 768px;
      height: 380px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .container-info-devs {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 768px;
        height: 250px;
      }
    }
  }

  @media (min-width: 1024px) {
    .part-one {
      width: 1024px;
      height: 700px;
      display: flex;
      flex-direction: column;
    }

    .part-two {
      width: 1000px;
      height: 500px;

      .container-info-devs {
        height: 420px;
        width: 1000px;
      }
    }
  }
`;

export const TitlePage = styled.div`
  margin-bottom: 26px;

  p:nth-child(1) {
    height: 44px;
    width: 112px;
    margin: 19px 0 5px 20px;
    font-size: 32px;
    line-height: 44px;
    font-weight: 600;
    color: var(--black);
  }

  p:nth-child(2) {
    display: flex;
    align-items: flex-end;
    height: 74px;
    width: 270px;
    margin-left: 20px;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
    color: var(--yellow-1);
  }

  p:nth-child(2) > img {
    height: 74px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    justify-content: center;
    width: 1000px;
  }
`;

export const ParagraphOne = styled.div`
  display: flex;
  align-items: center;
  height: 160px;
  width: 240px;
  margin-left: 25px;

  p {
    width: 196px;
    height: 161px;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
  }

  img {
    height: 55px;
    width: 46px;
    margin-left: 19px;
  }

  @media (min-width: 768px) {
    margin-left: 80px;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 1000px;
    height: 300px;
    margin: 0 auto;

    p {
      font-size: 35px;
      width: 300px;
      height: 180px;
    }

    img {
      height: 120px;
      width: 120px;
    }
  }
`;

export const ParagraphTwo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 187px;
  width: 240px;
  margin-top: 15px;
  margin-left: 25px;

  p {
    height: 187px;
    width: 182px;
    font-size: 20px;
    line-height: 27px;
    font-weight: 600;
  }

  img {
    height: 55px;
    width: 46px;
    margin-right: 19px;
  }

  @media (min-width: 768px) {
    margin: 0;
    width: 350px;
    align-items: flex-start;

    p {
      width: 230px;
      height: 160px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 1000px;
    height: 300px;
    margin: 0 auto;

    p {
      font-size: 35px;
      width: 300px;
      height: 200px;
    }

    img {
      height: 120px;
      width: 120px;
    }
  }
`;

export const WhoDoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 96px;
  width: 200px;
  margin-top: 20px;
  margin-left: 20px;

  p:nth-child(1),
  p:nth-child(3) {
    font-weight: 600;
    font-size: 20px;
    color: var(--black);
  }

  p:nth-child(2) {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 28px;
    color: var(--yellow-1);
  }

  p:nth-child(2) > img {
    height: 60px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 768px;
    height: 60px;
    align-items: center;
    margin: 0;

    p:nth-child(1),
    p:nth-child(3) {
      font-weight: 700;
      font-size: 30px;
    }
  }

  @media (min-width: 1024px) {
    width: 900px;
    justify-content: flex-start;

    p:nth-child(1),
    p:nth-child(3) {
      font-weight: 700;
      font-size: 35px;
    }

    p:nth-child(2) {
      font-weight: 700;
      font-size: 35px;
      margin-left: 10px;
    }
  }
`;
