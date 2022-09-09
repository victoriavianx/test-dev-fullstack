import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   
    :root {
        --body-font: 'Poppins', sans-serif;
        --font-regular: 400;
        --font-medium: 500;
        --font-semibold: 600;

        --first-title-color: #EA1A7F;
        --second-title-color: #FEC603;
        --third-title-color: #A8F387;
        --hover-color: #16D6FA;
        --contour-color: #000000;
        --font-hover-color: #ffffff;
    }

    html, body {
        width: 100%;
        height: 100vh;
    }

    html {
        scroll-behavior: smooth;
    }

    button {
        cursor: pointer;
    }
`;
