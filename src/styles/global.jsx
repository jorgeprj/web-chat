import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        --primary-color: #0284c7; 
    }
    body{
        width: 100vw;
        height: 100vh;
        font-family: 'Inter', sans-serif;
    }
`