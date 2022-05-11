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
        --grey-2: rgba(196, 196, 196, 0.65);
        --grey-1: #C4C4C4;
        --grey-0: #F3F3F3;
        --yellow-1: #FFC125;
        --yellow-0: #ffff7a;
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

`;