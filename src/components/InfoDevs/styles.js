import styled from "styled-components";

export const ContainerDev = styled.div`
    width: 240px;
    height: 110px;

`;

export const TableOnTheLeft = styled.div`

    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 240px;

    .barTable{
        position: relative;
        top: 10px;
        height: 124px;
    }
    
    .barTable > img:nth-child(2){
        position: relative;
        top: -95px;
        left: 28px;
    }
    .barTable > img:nth-child(3){
        position: relative;
        top: -95px;
        left: 25px;
    }

    .containerDevs{
        display: flex;
        flex-direction: column;
    }

    .nameDev{
        width: 100px;
        font-weight: 600;
    }

    .workDev{
        
        width: 100px;
        font-size: 10px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.65);
    }

    .contact-media{
        height: 20px;
        width: 20px;
        margin-right: 10px;
    }
`;

export const TableOnTheRight = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 240px;

    .barTable{
        position: relative;
        top: 10px;
        height: 124px;
    }
    
    .barTable > img:nth-child(2){
        position: relative;
        top: -95px;
        left: 28px;
    }
    .barTable > img:nth-child(3){
        position: relative;
        top: -95px;
        left: 25px;
    }

    .containerDevs{
        display: flex;
        flex-direction: column;
    }

    .nameDev{
        width: 100px;
        font-weight: 600;
        text-align: right;
    }

    .workDev{
        text-align: right;
        width: 100px;
        font-size: 10px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.65);
    }

    .media{
        text-align: right;
    }
    .contact-media{
        height: 20px;
        width: 20px;
        margin-left: 10px;
    }
`;