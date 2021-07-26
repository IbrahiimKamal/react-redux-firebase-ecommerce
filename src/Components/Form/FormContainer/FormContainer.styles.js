import { css, keyframes } from '@emotion/react';

export const formStyles = css`
  background-color: var(--white-color);
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 33;
  max-height: 480px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    height: 8px;
    display: none;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const googleBtnStyles = css`
  background-color: var(--white-color);
  border: 1px solid var(--primary-color);
  margin-bottom: 1rem;
  color: #000;
`;

export const lineStyles = css`
  font-size: 0.7rem;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-column-gap: 1.2rem;
  align-items: center;
  padding: 0 2.6rem;
  color: #e1dfec;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: currentColor;
  }
`;

export const headerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const logoStyles = css`
  display: block;
  width: 20%;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

export const titleStyles = css`
  /* padding: 1rem; */
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const textStyles = css`
  text-align: center;
  padding: 0.5rem 3rem 1rem;
  color: #9895a8;
  font-size: 14px;
`;

export const forgotPassowrdStyles = css`
  display: inline-block;
  padding: 0 0 1rem 1rem;
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
  /* animation: ${anim} 0.7s linear infinite; */
  text-align: center;
  margin-top: 1rem;
`;
