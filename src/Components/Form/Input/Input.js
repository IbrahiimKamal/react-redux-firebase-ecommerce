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
  margin,
}) => {
  return (
    <div css={formControlStyles({ margin })}>
      <label css={labelStyles} htmlFor={inputID}>
        {label}
      </label>
      <input
        css={inputStyles}
        id={inputID}
        type={type || 'text'}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        autoFocus={autoFocus ? true : false}
        autoComplete="off"
      />
      <MdError css={errorIconStyles} />
      <p css={errorMessageStyles}>{errorMessage}</p>
    </div>
  );
};

export default Input;
