import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, #root{
        height: 100%;
        font-size: 62.5%;
    }
    body{
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    body::-webkit-scrollbar {
        display: none;
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
    @media screen and (max-width: 700px) {
        html{
            font-size: 32.5%;
        }
    }

`;

export default GlobalStyle;
