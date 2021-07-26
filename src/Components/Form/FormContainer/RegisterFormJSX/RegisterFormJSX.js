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

const RegisterFormJSX = ({ btnTitle }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* <Input
        inputID="name"
        placeholder="Enter your Name"
        label="Your Name"
        errorMessage="you must enter an email"
        autoFocus
        margin
      /> */}

      <Input
        inputID="email"
        placeholder="Enter your Email"
        label="Your Email"
        errorMessage="you must enter an email"
        autoFocus
      />

      {!loading && (
        <Button width handleClick={() => setLoading(true)}>
          {btnTitle}
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
