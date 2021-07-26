/** @jsxImportSource @emotion/react */

import { btnStyles } from './Button.styles';

const Button = ({ children, type, handleClick, width, styles }) => {
  return (
    <button
      onClick={handleClick}
      type={`${type || 'submit'}`}
      css={[btnStyles({ width }), styles]}
    >
      {children}
    </button>
  );
};

export default Button;
