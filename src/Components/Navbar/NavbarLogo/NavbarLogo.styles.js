import { css } from '@emotion/react';

export const headerStyles = css`
  background-color: var(--white-color);
  padding: 1.5rem 0;
`;

export const navStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const contactStyles = css`
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }

  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.875rem;
    color: var(--grey-color);

    &:nth-of-type(1) {
      margin-right: 0.8rem;
    }

    span {
      margin-left: 0.5rem;
    }
  }

  .social-icons {
    background: red;
    display: none;
  }
`;

export const navLogo = css`
  margin: 0 auto;
`;

export const socialIcons = css`
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const bgHeaderStyles = css`
  background-color: var(--primary-color);
  display: none;

  img {
    width: 100%;
    display: block;
  }

  @media (min-width: 992px) {
    display: block;
  }
`;
