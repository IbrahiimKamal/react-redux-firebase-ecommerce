import { css } from '@emotion/react';

export const cardStyles = css`
  position: relative;
  border: 1px solid var(--border-color2);
  max-width: 350px;
  border-radius: 0.5rem;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0px 11px 59px 0 rgb(53 78 84 / 6%);
`;

export const imgContainerStyles = css`
  display: block;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(0 0 0 / 40%);
  }
`;

export const fruitImageStyles = css`
  width: 100%;
  height: 200px;
  display: block;
`;

export const cardFooterStyles = css`
  padding: 2rem 0 1.5rem 0;
  text-align: center;
`;

export const cardInfoStyles = css`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding: 0 1rem;

  width: 300px;
  overflow-y: scroll;
  scrollbar-color: #ece2d4 #fff;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 8px;
    display: none;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ece2d4;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #afa08b;
  }

  &::-webkit-scrollbar {
    @media (min-width: 992px) {
      display: block;
    }
  }
`;

export const commonStyles = css`
  display: inline-block;
  text-transform: capitalize;
  color: var(--grey-color);
  background-color: var(--primary-color);
  padding: 0.5rem 1.5rem;
  border-radius: 5rem;
  margin-right: 0.3rem;
  margin-bottom: 0.5rem;
  align-self: auto;
  white-space: nowrap;
  box-shadow: 0px 11px 59px 0 rgb(53 78 84 / 6%);
  cursor: default;
`;

export const newStyles = css`
  display: inline-block;
  position: absolute;
  top: 2%;
  right: 5%;
  background-color: hotpink;
  color: var(--primary-color);
  padding: 0.3rem 1rem;
  border-top-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  text-transform: uppercase;
  font-size: 0.6rem;
  box-shadow: 0px 11px 59px 0 rgb(53 78 84 / 6%);
`;
