import {createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', Arial, sans-serif;
    }

    body{
        background-color: rgba(0, 0, 0, .95);
        color: #FFF;
    }

    button {
        cursor: pointer;
    }
`;