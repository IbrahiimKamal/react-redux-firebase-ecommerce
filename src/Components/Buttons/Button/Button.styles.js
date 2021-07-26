import { css } from '@emotion/react';

export const btnStyles = ({ width }) => css`
  background-color: var(--blue-color);
  color: var(--white-color);
  border: 0;
  border-radius: 5rem;
  padding: 0.7rem 1rem;
  outline: none;
  width: ${width && '85%'};
  cursor: pointer;
  margin: 0 auto;
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.01);
  }

  &:focus {
    outline: none;
  }
`;
