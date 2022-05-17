import styled from "styled-components";

export const ContainerDev = styled.div`
    width: 240px;

    @media(min-width: 768px){
        width: 250px;
        height: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
    }
`;

export const TableOnTheLeft = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 240px;

    .icon-user, .icon-assurance, .icon-scrumMaster{
        display: none;
    }

    .barTable{
        position: relative;
        top: 10px;
        height: 124px;
    }
    
    .barTable > img:nth-child(2){
        position: relative;
        top: -95px;
        left: 28px;
        height: 45px;
    }
    .barTable > img:nth-child(3){
        position: relative;
        top: -95px;
        left: 25px;
        height: 45px;
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

        margin: 0 5px;
    }

    @media(min-width: 768px){
        height: 120px;
    }

    @media(min-width: 1024px){
        flex-direction: column;
        height: 350px;
        justify-content: space-around;

        .barTable{
            height: 200px;
            
            >img:nth-child(1){
                height: 180px;
            }

            >img:nth-child(2){
                height: 80px;
                left: 50px;
                top: -160px;
            }

            >img:nth-child(3){
                height: 80px;
                left: 48px;
                top: -160px;
            }
        }
        .containerDevs{
            flex-direction: row;
        }

        .infoDevs{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .nameDev{
            font-size: 20px;
        }

        .workDev{
            font-size: 14px;
        }

        .nameDev, .workDev{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
        }

        .contact-media{
            opacity: 0.7;
        }

        .icon-user, .icon-assurance, .icon-scrumMaster{
            display: flex;
            height: 20px;
            margin: 0 5px;
        }
    }
`;

export const TableOnTheRight = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 240px;

    .icon-user, .icon-productOwner, .icon-techLeader{
        display: none;
    }

    .barTable{
        position: relative;
        top: 10px;
        height: 124px;
    }
    
    .barTable > img:nth-child(2){
        position: relative;
        top: -95px;
        left: 28px;
        height: 45px;
    }
    .barTable > img:nth-child(3){
        position: relative;
        top: -95px;
        left: 25px;
        height: 45px;
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
        margin: 0 5px;
    }

    @media(min-width: 768px){
        
        height: 120px;
        flex-direction: row-reverse;
        
        .nameDev, .workDev, .media{
            text-align: left;
        }
    }

    @media(min-width: 1024px){
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        height: 350px;

        .barTable{
            height: 200px;

            >img:nth-child(1){
                height: 180px;
            }

            >img:nth-child(2){
                height: 80px;
                left: 50px;
                top: -160px;
            }

            >img:nth-child(3){
                height: 80px;
                left: 48px;
                top: -160px;
            }
        }

        .containerDevs{
            flex-direction: row;
        }

        .infoDevs{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .nameDev{
            font-size: 20px;
        }

        .workDev{
            font-size: 14px;
        }

        .nameDev, .workDev{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
        }

        .contact-media{
            opacity: 0.7;
        }

        .icon-user, .icon-productOwner, .icon-techLeader{
            display: flex;
            height: 20px;
            margin: 0 5px;
        }
    }
`;