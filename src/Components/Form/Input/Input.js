/** @jsxImportSource @emotion/react */

import { MdError } from 'react-icons/md';

import {
  errorIconStyles,
  errorMessageStyles,
  formControlStyles,
  inputStyles,
  labelStyles,
} from './Input.styles';

const Input = ({
  type,
  value,
  onChangeHandler,
  placeholder,
  autoFocus,
  label,
  inputID,
  errorMessage,
}) => {
  return (
    <div css={formControlStyles}>
      <label css={labelStyles} htmlFor={inputID}>
        {label}
      </label>
      <input
        css={inputStyles}
        id={inputID}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        autoFocus={autoFocus ? true : false}
      />
      <MdError css={errorIconStyles} />
      <p css={errorMessageStyles}>{errorMessage}</p>
    </div>
  );
};

export default Input;
