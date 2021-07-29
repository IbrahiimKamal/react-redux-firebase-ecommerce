import { css } from '@emotion/react';

export const footerStyles = css`
  background: var(--black-color1);
  color: rgb(153, 153, 153);
`;

export const headerStyles = css`
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const logoStyles = css`
  width: 30%;
  display: block;
  margin: 0 auto 1rem auto;
  cursor: pointer;

  @media (min-width: 992px) {
    width: 55%;
  }
`;

export const titleStyles = css`
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-align: center;
`;

export const textStyles = css`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const formStyles = css`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const inputStyles = css`
  padding: 0.8rem 0.8rem;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  background: #2c2c2c;
  margin-bottom: 1rem;
`;

export const btnStyles = css`
  background: rgb(34, 102, 187);
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0.8rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const contentStyles = css`
  margin-bottom: 1.5rem;
  /* text-align: center; */
`;

export const contenTitletStyles = css`
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const contenTexttStyles = css`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const infoStyles = css`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  cursor: pointer;
  margin: 1rem 0;

  .author {
    color: #fff;
  }
`;
