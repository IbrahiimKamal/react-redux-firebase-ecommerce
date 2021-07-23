import { css } from '@emotion/react';

export const boxStyles = css`
  background-color: var(--green-color);
  color: var(--white-color);
  text-align: center;
  padding: 2rem 0;
  border-radius: 0.3rem;
  max-width: 450px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const textStyles = css`
  font-family: var(--secondary-font-family);
  font-weight: 700;
  margin: 0 1rem;

  @media (min-width: 992px) {
    font-size: 1.6rem;
  }
`;

export const imgStyles = css`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;
