import { css } from '@emotion/react';

export const sidebarStyles = ({ isSidebarActive }) => css`
  position: fixed;
  top: 150px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 555;
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  transition: transform 0.3s;

  transform: ${isSidebarActive ? 'translateX(0)' : 'translateX(-110%)'};

  @media (min-width: 992px) {
    display: none;
  }
`;

export const logoStyles = css`
  width: 20%;
  display: block;
  margin-bottom: 1rem;
`;

export const listStyles = css`
  text-align: center;
  margin-bottom: 1.5rem;

  .activeLink {
    background: var(--yellow-color);
  }
`;

export const linkStyles = css`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  color: var(--black-color2);
  border-radius: 0.5rem;
`;
