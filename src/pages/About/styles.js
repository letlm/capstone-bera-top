import styled from "styled-components";

export const Container = styled.div`
    width: 320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container{
        height: 550px;
    }

    @media (min-width: 400px) {
        width: 400px;
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
        color: #000000;
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
        color: #ffc125;
    }

    p:nth-child(2) > img {
        height: 74px;
    }
`;

export const ParagraphOne = styled.div`
    
    display: flex;
    align-items: center;
    height: 160px;
    width: 240px;
    margin-left: 25px;

    p{
        width: 196px;
        height: 161px;
        

        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
    }

    img{
        
        height: 55px;
        width: 46px;
        margin-left: 19px;
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

    p{
        height: 187px;
        width: 182px;
        

        font-size: 20px;
        line-height: 27px;
        font-weight: 600;
    }

    img{
        height: 55px;
        width: 46px;
        margin-right: 19px;
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

    p:nth-child(1){
        font-weight: 600;
        font-size: 20px;
        color: #000000;
    }

    p:nth-child(2){
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 28px;
        color: #ffc125;
    }

    p:nth-child(2) > img {
        height: 60px;
    }
`;
