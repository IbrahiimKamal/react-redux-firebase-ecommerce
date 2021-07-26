import { css } from '@emotion/react';

export const formStyles = css`
  background-color: var(--white-color);
  width: 90%;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  z-index: 33;
`;

export const headerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const logoStyles = css`
  display: block;
  width: 20%;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

export const titleStyles = css`
  /* padding: 1rem; */
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const textStyles = css`
  text-align: center;
  padding: 0.5rem 3rem 1rem;
  color: #9895a8;
  font-size: 14px;
`;
