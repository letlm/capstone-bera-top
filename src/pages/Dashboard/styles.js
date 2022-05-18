import styled from "styled-components";

export const Container = styled.div`
    min-width: 320px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .navProvisorio {
        /* width: 286px; */
        height: 40px;
        border: 1px solid black;
        font-size: 15px;
        /* margin-top: -50px; */
        width: 90%;
        max-width: 400px;
    }

    @media (min-width: 630px) {
        .navProvisorio {
            max-width: 450px;
            margin: 0;
        }
    }

    @media (min-width: 1100px) {
        .navProvisorio {
            max-width: 800px;
            margin-top: 4px;
            margin-bottom: -20px;
        }
    }
`;

export const Context = styled.ul`
    margin: 0 auto;
    width: 310px;
    height: 350px;
    display: flex;
    background-color: var(--white);
    border: none;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    overflow-x: auto;

    ::-webkit-scrollbar-track {
        background-color: var(--grey-0);
    }

    ::-webkit-scrollbar {
        background: var(--grey-0);
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: var(--yellow-1);
    }

    @media (min-width: 630px) {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 620px;
        height: 500px;
        justify-content: space-evenly;
    }

    @media (min-width: 1000px) {
        margin-top: 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 720px;
        height: 500px;
        justify-content: space-evenly;
    }

    @media (min-width: 1224px) {
        width: 1100px;
    }
`;
