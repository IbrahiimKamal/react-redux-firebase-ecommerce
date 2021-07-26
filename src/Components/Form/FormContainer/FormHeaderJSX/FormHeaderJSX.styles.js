import { css } from '@emotion/react';

export const headerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const logoStyles = css`
  display: block;
  width: 20%;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const titleStyles = css`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const textStyles = css`
  text-align: center;
  padding: 0.5rem 3rem 1rem;
  color: #9895a8;
  font-size: 14px;
`;

export const googleBtnStyles = css`
  background-color: var(--white-color);
  border: 1px solid var(--primary-color);
  margin-bottom: 1rem;
  color: #000;
`;

export const lineStyles = css`
  font-size: 0.7rem;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-column-gap: 1.2rem;
  align-items: center;
  padding: 0 2.6rem;
  color: #e1dfec;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: currentColor;
  }
`;
