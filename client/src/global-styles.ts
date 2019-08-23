import { createGlobalStyle } from "./typed-components";

const GlobalStyle = createGlobalStyle`
    
    html, body {
        margin: 0;
        padding: 0;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
    }
    a, li, ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

`;

export default GlobalStyle;