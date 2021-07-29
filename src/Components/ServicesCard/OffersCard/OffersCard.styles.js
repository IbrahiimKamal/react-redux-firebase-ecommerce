import { css } from '@emotion/react';

export const cardStyles = css`
  border: 1px solid var(--border-color2);
  border-radius: 0.5rem;
  padding: 3rem 0;
  max-width: 294px;
  margin: 0 auto;
`;

export const imgStyles = css`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 1px solid var(--border-color2);
  padding: 1rem;
`;

export const titleStyles = css`
  color: var(--black-color2);
  text-align: center;
  font-family: var(--secondary-font-family);
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const textStyles = css`
  color: var(--grey-color);
  text-align: center;
  line-height: 25px;
  width: 55%;
  margin: 0 auto;
  font-size: 0.875rem;
`;
