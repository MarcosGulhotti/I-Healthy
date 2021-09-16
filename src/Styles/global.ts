import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --Background: #F5F5F5;
        --Main-White: #FFFFFF;
        --Main-Blue: #008FFF;
        --Main-Green: #37DB7F;
        --Main-Purple: #7988FD;
        --Main-Orange: #FE9901;
        --Main-Black: #282830;
        --Main-Gray: #9DA4B7;
        --Second-Blue: #D9EEFF;
        --Second-Green: #A3FFAC;
        --Second-Black: #3D3838;
        --Font-Roboto-Mono: 'Roboto Mono', monospace;
        --Font-Saira: 'Saira', sans-serif;

    }

    body, div, ul, li, button, p, img, nav, a, input, h1, h2, select{
        margin: 0;
        padding: 0;
        list-style-type: none;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      border: none;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: lightgray; 
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--Main-Black); 
    }

    }
    body{
        background-color: var(---Background);
    }

    button{
        cursor: pointer;
    }
    a{
        color: var(--Main-Orange);
        font-family: 'Saira';
        font-weight: bold;
    }
`;

export default GlobalStyle;
