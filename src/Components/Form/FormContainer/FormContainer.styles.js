import { css } from '@emotion/react';

export const formStyles = css`
  background-color: var(--white-color);
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 33;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    height: 8px;
    display: none;
  }

  @media (max-width: 500px) {
    width: 85%;
  }
`;
