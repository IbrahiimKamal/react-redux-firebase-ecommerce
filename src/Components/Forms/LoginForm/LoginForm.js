/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import { toast } from 'react-toastify';

import logoImg from '../../../Assets/images/logo.png';

import Button from '../../Buttons/Button/Button';
import Input from '../Input/Input';

import { auth } from '../../../Firebase';

import {
  forgotPassowrdStyles,
  formStyles,
  headerStyles,
  loadingStyle,
  logoStyles,
  registerLinkStyles,
  textStyles,
  titleStyles,
} from '../styles';

const LoginForm = ({ password }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form css={formStyles}>
      <div css={headerStyles}>
        <img css={logoStyles} src={logoImg} alt="logo" />
        <h3 css={titleStyles}>Login</h3>
        <p css={textStyles}>See your growth and get consulting support!</p>
      </div>

      <Input
        inputID="email"
        type="email"
        placeholder="Enter your Email"
        label="Email"
        errorMessage="you must enter an email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <Input
        inputID="password"
        type="password"
        placeholder="Enter your Password"
        label="Password"
        errorMessage="you must enter a password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />

      {!isLoading && <Button width>Login</Button>}

      {isLoading && (
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
    </form>
  );
};

export default LoginForm;
