/** @jsxImportSource @emotion/react */

import { btnStyles } from './Button.styles';

const Button = ({ children, type, handleClick, width, styles, bgColor }) => {
  return (
    <button
      onClick={handleClick}
      type={`${type || 'submit'}`}
      css={[btnStyles({ width, bgColor }), styles]}
    >
      {children}
    </button>
  );
};

export default Button;
