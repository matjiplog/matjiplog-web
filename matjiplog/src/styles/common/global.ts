import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, #root, .App {
        height: 100%;
        font-size: 62.5%;
        
    }
    li {
        list-style: none;
    }
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        text-decoration: none;
        border-collapse: collapse;
    }
    button{
        background: none;
        border: none;
        &:hover{
            cursor: Pointer;
        }
    }
`;

export default GlobalStyle;
