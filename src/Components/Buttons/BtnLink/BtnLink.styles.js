import { css } from '@emotion/react';

export const btnStyles = css`
  display: inline-block;
  background-color: var(--yellow-color);
  color: var(--black-color2);
  font-family: var(--primary-font-family);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  text-transform: capitalize;
  /* margin-top: 1rem; */

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;
