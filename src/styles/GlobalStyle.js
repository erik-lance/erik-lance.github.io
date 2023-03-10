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
    }

    .component-header {
        color: var(--orange);
    }

    a {
        font-weight: 600;
        text-decoration: none; 
    }

    /* unvisited link */
    a:link { color: var(--dark-green); }

    /* visited link */
    a:visited { color: var(--dark-green); }

    /* mouse over link */
    a:hover {
        color: var(--green);
    }

    /* selected link */
    a:active {
        color: var(--dark-green);
    }
`;

export default GlobalStyle;
