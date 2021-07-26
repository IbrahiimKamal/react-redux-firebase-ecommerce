/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';

import Input from '../../Input/Input';
import Button from '../../../Buttons/Button/Button';

import {
  forgotPassowrdStyles,
  loadingStyle,
  registerLinkStyles,
} from '../LoginRegister.styles.js';

const LoginFormJSX = ({ password }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Input
        inputID="email"
        placeholder="Enter your Email"
        label="Email"
        errorMessage="you must enter an email"
        autoFocus
        margin
      />

      <Input
        inputID="password"
        type={password}
        placeholder="Enter your Password"
        label="Password"
        errorMessage="you must enter a password"
      />

      {!loading && (
        <Button width handleClick={() => setLoading(true)}>
          Login
        </Button>
      )}

      {loading && (
        <Button width>
          <span>
            <AiOutlineLoading size={15} css={loadingStyle} />
          </span>
        </Button>
      )}

      <Link to="/" css={forgotPassowrdStyles}>
        Forget password?
      </Link>

      <div css={registerLinkStyles}>
        <span>Not register yet?</span>
        <Link to="/register" css={forgotPassowrdStyles}>
          Create an Account
        </Link>
      </div>
    </>
  );
};

export default LoginFormJSX;
