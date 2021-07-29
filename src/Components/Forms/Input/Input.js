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
  onChange,
  placeholder,
  label,
  inputID,
  errorMessage,
  margin,
  disabled,
  name,
}) => {
  return (
    <div css={formControlStyles({ margin })}>
      <label css={labelStyles} htmlFor={inputID}>
        {label}
      </label>
      <input
        css={inputStyles}
        id={inputID}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        disabled={disabled}
        name={name}
      />
      <MdError css={errorIconStyles} />
      <p css={errorMessageStyles}>{errorMessage}</p>
    </div>
  );
};

export default Input;
