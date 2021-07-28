import { css } from '@emotion/react';

export const listStyle = css`
  border: 1px solid var(--border-color2);
  padding: 1rem;
  border-radius: 0.5rem;
  position: sticky;
  top: 10%;
`;

export const titleStyle = css`
  font-family: var(--secondary-font-family);
  font-size: 2rem;
`;

export const lineStyle = css`
  max-width: 80px;
  display: block;
  margin-bottom: 1.5rem;
`;

export const itemStyle = css`
  padding: 0.3rem 0;
  cursor: pointer;

  &.active {
    color: red;
  }
`;
