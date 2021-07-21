import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow:wght@200;300;500;600&display=swap');

        :root {
          --primary-color: #f5f0e9;
          --primary-font-family: 'Barlow', sans-serif;
          --secondary-font-family: 'Amatic SC', cursive;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--primary-font-family);
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
