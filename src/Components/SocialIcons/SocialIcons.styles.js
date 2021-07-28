import { css } from '@emotion/react';

export const iconsListStyles = ({ bgColor }) => css`
  display: flex;
  align-items: center;

  li {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }

    &:hover:nth-of-type(1) span {
      background-color: #0a66c2;
    }

    &:hover:nth-of-type(2) span {
      background-color: #ff0000;
    }

    &:hover:nth-of-type(3) span {
      background-color: #191e25;
    }

    &:hover:nth-of-type(4) span {
      background-color: #191e25;
    }

    a {
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${bgColor || 'var(--primary-color)'};
        color: ${bgColor ? 'var(--black-color1)' : 'var(--grey-color)'};
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 50%;
        transition: color 0.3s, background-color 0.3s;

        &:hover {
          color: var(--white-color);
          background-color: var(--green-color);
        }
      }
    }
  }
`;
