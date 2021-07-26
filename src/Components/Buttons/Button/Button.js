/** @jsxImportSource @emotion/react */

import { btnStyles } from './Button.styles';

const Button = ({ children, type, width }) => {
  return (
    <button type={`${type || 'submit'}`} css={btnStyles({ width })}>
      {children}
    </button>
  );
};

export default Button;
