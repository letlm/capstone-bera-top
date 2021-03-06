import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
       * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --red: #C7574F; 
        --black: #000000;
        --white: #ffffff;
        --grey-3: rgba(0, 0, 0, 0.65);
        --grey-2: rgba(196, 196, 196, 0.65);
        --grey-1: #C4C4C4;
        --grey-0: #F3F3F3;
        --yellow-2: #ee9b00a6;
        --yellow-1: #FFC125;
        --yellow-0: #FFE135;
    }

    body {
        background: var(--white);
        font-family: 'Nunito';
    }
    
    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }

    .toastify-color-progress-error{
        font-family: "Nunito";
        font-size: 18px;
        font-weight: bold;
        background-color: var(--yellow-1);
        box-shadow: 10px 10px 69px -2px rgba(9,9,8,0.47);
        color: var(--red);
    }

    .toastify-color-progress-light {
        font-family: "Nunito";
        font-weight: bold;
        background-color: var(--yellow-1);
        box-shadow: 10px 10px 69px -2px rgba(9,9,8,0.47);
        color: var(--black);
    }

    .toastify-color-progress-success {
        font-family: "Nunito";
        font-weight: bold;
        font-size: 18px;
        background-color: var(--yellow-1);
        box-shadow: 10px 10px 69px -2px rgba(9,9,8,0.47);
        color: var(--black);
    }

    .Toastify__progress-bar-theme--light {
        background: var(--black);
    }

`;
