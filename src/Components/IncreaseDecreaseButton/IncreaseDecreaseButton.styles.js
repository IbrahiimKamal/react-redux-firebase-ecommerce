import { css } from '@emotion/react';

export const qtyStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin: 0 auto;
`;

export const btnValueStyles = css`
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 100%;
  padding: 0;
  background: #eee;
  outline: none;
  cursor: pointer;

  &:hover {
    background: rgb(230, 230, 230);
  }

  &:active {
    background: rgb(210, 210, 210);
  }
`;

export const decreaseBtnStyles = css`
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
`;

export const increaseBtnStyles = css`
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
`;

export const numberStyles = css`
  display: inline-block;
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 100%;
  line-height: 40px;
  font-size: 11pt;
  box-sizing: border-box;
  background: white;

  &::selection {
    background: none;
  }
`;
