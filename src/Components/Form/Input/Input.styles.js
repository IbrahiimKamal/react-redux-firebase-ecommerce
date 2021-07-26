import { css } from '@emotion/react';

export const formControlStyles = ({ margin }) => css`
  position: relative;
  margin-bottom: ${margin ? '1rem' : '0'};
`;

export const labelStyles = css`
  display: block;
  padding: 0 1rem;
  margin-bottom: 0.6rem;
`;

export const inputStyles = css`
  display: block;
  width: 100%;
  padding: 1rem;
  border-radius: 5rem;
  border: 1px solid var(--primary-color);
  /* border: 1px solid red; */
  &:focus {
    outline: none;
  }
`;

export const errorIconStyles = css`
  color: red;
  position: absolute;
  top: 46px;
  right: 14px;
  visibility: hidden;
`;

export const errorMessageStyles = css`
  padding: 0.3rem 1rem 0;
  color: red;
  font-size: 13px;
  visibility: hidden;
`;
