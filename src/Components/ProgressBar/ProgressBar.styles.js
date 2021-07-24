import { css } from '@emotion/react';

export const titleStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  margin-bottom: 0.5rem;

  span {
    text-transform: capitalize;
  }
`;

export const progressBarStyles = ({ margin }) => css`
  background: #efefef;
  border: solid 1px var(--border-color2);
  background: rgba(8, 102, 220, 0.2);
  overflow: hidden;
  border-radius: 5rem;
  margin-bottom: ${margin || 0};
`;

export const progressBarValueStyles = ({ value }) => css`
  height: 0.8em;
  float: left;
  background: var(--green-color);
  width: ${value};
`;
