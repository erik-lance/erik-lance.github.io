import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    * {
        font-family: 'Inter';
        font-weight: 400;
    }

    body {
        margin: 0;
        background-color: var(--dark-gray);
        color: var(--white);
    }

    .component-header {
        color: var(--blue);
    }

    a {
        font-weight: 600;
        text-decoration: none; 
    }

    /* unvisited link */
    a:link { color: var(--pink); }

    /* visited link */
    a:visited { color: var(--pink); }

    /* mouse over link */
    a:hover {
        color: var(--green);
    }

    /* selected link */
    a:active {
        color: var(--green);
    }
`;

export default GlobalStyle;
