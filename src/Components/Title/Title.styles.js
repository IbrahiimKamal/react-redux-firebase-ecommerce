import { css } from '@emotion/react';

export const titleBoxStyles = ({ textLeft }) => css`
  text-align: ${textLeft ? 'left' : 'center'};
`;

export const subtitleStyles = css`
  color: var(--green-color);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
`;

export const titleStyles = css`
  font-family: var(--secondary-font-family);
  font-weight: 700;
  font-size: 2rem;
`;
