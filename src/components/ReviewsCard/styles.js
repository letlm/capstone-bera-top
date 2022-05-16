import styled from "styled-components";

export const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    font-size: 14px;
    background: var(--grey-0);
    border-radius: 4px;
    max-width: 654px;
    border: 1px solid var(--yellow-1);
    
    p{
        font-weight: bold;
        padding: 10px;
    }

    span{
        font-weight: 400;
    }

    div{
        display: flex;
        gap: 25px;


    }
`