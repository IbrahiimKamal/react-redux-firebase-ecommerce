import { css, keyframes } from '@emotion/react';

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
  margin-bottom: 1rem;
`;

export const titleStyles = css`
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

export const textStyles = css`
  text-align: center;
  padding: 0.5rem 3rem 1rem;
  color: #9895a8;
  font-size: 14px;
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

export const forgotPassowrdStyles = css`
  display: inline-block;
  padding: 1rem 0 0 0;
  color: blue;
  color: var(--blue-color);
`;
