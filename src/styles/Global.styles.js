import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow:wght@200;300;500;600&display=swap');

        :root {
          --primary-color: #f5f0e9;
          --white-color: #ffffff;
          --green-color: #5b8c51;
          --grey-color: #878986;
          --black-color1: #000000;
          --black-color2: #404a3d;
          --yellow-color: #eddd5e;
          --border-color: #f6f6f6;
          --border-color2: #e5e5e5;
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

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
        }

        input,
        textarea,
        button,
        select,
        a {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        .section-bg {
          background-color: var(--primary-color);
        }
      `}
    />
  );
};

export default GlobalStyles;
