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
    
    p{
        font-weight: bold;
        padding: 10px;
    }

    span{
        font-weight: 400;
    }
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    div{
        display: flex;
    }
`

export const StyledButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 10px;
    gap: 5px;

    button{
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
`