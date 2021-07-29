import { css } from '@emotion/react';

export const textAreaStyles = css`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border: 1px solid var(--primary-color);
  font-family: var(--primary-font-family);

  &:focus {
    outline: none;
  }
`;
