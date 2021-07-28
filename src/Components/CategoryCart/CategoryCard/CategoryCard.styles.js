import { css } from '@emotion/react';

export const cardStyles = css`
  border: 1px solid var(--green-color);
  /* padding: 2rem 0 1.3rem 0; */
  border-radius: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  min-height: 250px;
  max-height: 251px;
  position: relative;
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const imgStyles = css`
  width: 100%;
  display: block;
  margin: 0 auto;
  transform: scale(0.8);
`;

export const footerStyles = css`
  text-align: center;
  text-transform: capitalize;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -50%);

  h4 {
    color: var(--green-color);
  }
`;
