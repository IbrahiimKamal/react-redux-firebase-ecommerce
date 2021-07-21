import { css } from '@emotion/react';

export const headerStyles = css`
  background-color: var(--primary-color);
  padding: 1.3rem 0;
`;

export const navStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: var(--grey-color);
    &:hover {
      cursor: pointer;
    }
  }

  .cart {
    position: relative;

    .cart-count {
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }
`;

export const navLinksStyles = css`
  display: flex;
  align-items: center;

  li {
    margin-right: 0.5rem;
    &:last-of-type {
      margin-right: 0;
    }
  }

  a {
    display: inline-block;
    color: var(--grey-color);
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    border-radius: 0.3rem;

    background-image: linear-gradient(
      to left,
      transparent,
      transparent 50%,
      var(--yellow-color) 50%,
      var(--yellow-color)
    );
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all 0.25s ease-in;

    &:hover {
      background-position: 0 0;
      color: var(--black-color2);
    }
  }

  .active-link {
    background-color: var(--yellow-color);
    color: var(--black-color2);
  }
`;
