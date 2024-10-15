import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #2D3748;
    --secondary-color: #4A5568;
    --accent-color: #48BB78;
    --background-color: #F9F9F7;
    --text-color: #1A202C;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }
`;

export default GlobalStyles;
