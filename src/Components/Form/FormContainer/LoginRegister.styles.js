import { css, keyframes } from '@emotion/react';

export const forgotPassowrdStyles = css`
  display: inline-block;
  padding: 1rem 0 0 0;
  color: blue;
  color: var(--blue-color);
`;

const anim = keyframes`
from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const loadingStyle = css`
  animation: ${anim} 0.7s linear infinite;
`;

export const registerLinkStyles = css`
  font-size: 14px;
  span {
    margin-right: 0.3rem;
  }
`;
