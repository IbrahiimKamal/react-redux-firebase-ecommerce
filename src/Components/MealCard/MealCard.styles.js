import { css } from '@emotion/react';

export const cardStyles = css`
  position: relative;
  border: 1px solid var(--border-color2);
  max-width: 350px;
  /* background-color: var(--primary-color); */
  border-radius: 0.5rem;
  margin: 0 auto;
  overflow: hidden;
`;

export const imgContainerStyles = css`
  display: block;
`;

export const fruitImageStyles = css`
  width: 100%;
  height: 200px;
  display: block;
  object-fit: cover;
`;

export const cardFooterStyles = css`
  padding: 2rem 0 1.5rem 0;
  text-align: center;
`;

export const newStyles = css`
  display: inline-block;
  position: absolute;
  top: 2%;
  right: 5%;
  background-color: var(--green-color);
  color: var(--white-color);
  padding: 0.3rem 1rem;
  border-top-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

export const commonStyles = css`
  text-transform: capitalize;
  margin-bottom: 0.3rem;
  color: var(--grey-color);
`;
