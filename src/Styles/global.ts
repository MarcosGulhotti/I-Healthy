import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body, div, ul, button, p, img, nav, a, input, h1, h2, select{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    }

button{
    cursor: pointer;
}
`;

export default GlobalStyle;
