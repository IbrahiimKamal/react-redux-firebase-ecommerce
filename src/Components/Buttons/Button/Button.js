/** @jsxImportSource @emotion/react */

import { btnStyles } from './Button.styles';

const Button = ({ children, type, handleClick, width }) => {
  return (
    <button
      onClick={handleClick}
      type={`${type || 'submit'}`}
      css={[btnStyles({ width })]}
    >
      {children}
    </button>
  );
};

export default Button;
