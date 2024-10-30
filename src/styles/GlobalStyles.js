import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #2D3748;
    --secondary-color: #4A5568;
    --accent-color: #48BB78;
    --background-color: #F9F9F7;
    --text-color: #1A202C;
    
    /* Font sizes for desktop */
    --h1-size: 2.5rem;
    --h2-size: 2rem;
    --h3-size: 1.75rem;
    --body-size: 1rem;
    
    /* Spacing variables */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
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
    font-size: var(--body-size);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
  }

  h1 {
    font-size: var(--h1-size);
  }

  h2 {
    font-size: var(--h2-size);
  }

  h3 {
    font-size: var(--h3-size);
  }

  p {
    margin-bottom: var(--spacing-md);
  }

  /* Container for content */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    :root {
      /* Adjust font sizes for mobile */
      --h1-size: 1.75rem;
      --h2-size: 1.5rem;
      --h3-size: 1.25rem;
      --body-size: 0.875rem;
    }

    body {
      padding: 0 var(--spacing-sm);
    }

    h1, h2, h3, h4, h5, h6 {
      margin-bottom: var(--spacing-sm);
    }

    .container {
      padding: 0 var(--spacing-sm);
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    :root {
      --h1-size: 1.5rem;
      --h2-size: 1.25rem;
      --h3-size: 1.125rem;
      --body-size: 0.875rem;
    }
  }

  /* For larger screens */
  @media (min-width: 1200px) {
    :root {
      --h1-size: 3rem;
      --h2-size: 2.5rem;
      --h3-size: 2rem;
      --body-size: 1.125rem;
    }
  }

  /* Utility classes */
  .text-center {
    text-align: center;
  }

  .mb-1 {
    margin-bottom: var(--spacing-sm);
  }

  .mb-2 {
    margin-bottom: var(--spacing-md);
  }

  .mb-3 {
    margin-bottom: var(--spacing-lg);
  }
`;

export default GlobalStyles;