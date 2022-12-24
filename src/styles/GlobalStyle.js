import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    * {
        font-family: 'Inter';
        font-weight: 400;
    }

    body {
        margin: 0;
    }
`;

export default GlobalStyle;