import { css } from '@emotion/react';

export const cardStyles = css`
  border: 1px solid var(--border-color2);
  border-radius: 0.3rem;
  overflow: hidden;
  max-width: 300px;
  margin: 0 auto;

  .btnCart {
    background: var(--green-color);
  }

  .cartIconStyles {
    color: rgba(225, 225, 225, 0.9);
  }
`;

export const imgContainerStyles = css`
  display: block;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(0 0 0 / 40%);
  }
`;

export const imgStyles = css`
  width: 100%;
  height: 220px;
  display: block;
`;

export const footerStyles = css`
  text-align: center;
  padding: 1.5rem 0 1.2rem;
`;

export const titleStyles = css`
  color: var(--green-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const priceStyles = css`
  color: var(--green-color);
  font-weight: 600;
`;
