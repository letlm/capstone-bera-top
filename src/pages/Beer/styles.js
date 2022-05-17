import styled from "styled-components";

export const BeerContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 73vh;
    max-width: 600px;
    margin: auto;
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
