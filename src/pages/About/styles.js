import styled from "styled-components";


// export const Header = styled.div`
//     /* border: 1px solid #F3F3F3; */
//     box-shadow: 0 2px #C4C4C4;
//     display: flex;
//     margin: 0 auto;
//     justify-content: space-around;
//     width: 90%;
//     align-items: center;
//     background-color: #F3F3F3;
//     height: 80px;
//     width: 320px;
//     @media (min-width: 400px) {
//         width: 400px;
//     }

//     .logo {
//         display: flex;
//         align-items: center;

//         h1 {
//             color: var(--yellow-1);
//             font-weight: 700;
            
//         }

//         img {
//             width: 50px;
//             height: 50px;
//             filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
//         }
//     }

//     button {
//         width: 80px;
//         height: 27px;
//         background: var(--grey-0);
//         color: var(--yellow-1);
//         padding: 0px;
//         border-radius: 4px;
//         border: 1px solid var(--yellow-1);
//         font-weight: 800;
//         line-height: 23px;
//         :hover {
//             background: var(--grey-1);
//         }
//     }
// `;

export const Container = styled.div`
    width: 320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

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