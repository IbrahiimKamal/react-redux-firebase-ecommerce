/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';

import Input from '../../Input/Input';
import Button from '../../../Buttons/Button/Button';

import {
  loadingStyle,
  forgotPassowrdStyles,
  registerLinkStyles,
} from '../LoginRegister.styles';

const RegisterFormJSX = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Input
        inputID="email"
        placeholder="Enter your Email"
        label="Your Email"
        errorMessage="you must enter an email"
      />

      {!loading && (
        <Button width handleClick={() => setLoading(true)}>
          Register
        </Button>
      )}

      {loading && (
        <Button width>
          <span>
            <AiOutlineLoading size={15} css={loadingStyle} />
          </span>
        </Button>
      )}

      <div css={registerLinkStyles}>
        <span>Already have an Account?</span>
        <Link to="/login" css={forgotPassowrdStyles}>
          Login
        </Link>
      </div>
    </>
  );
};

export default RegisterFormJSX;
