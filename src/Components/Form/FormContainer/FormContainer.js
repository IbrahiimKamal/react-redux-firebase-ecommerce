/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import Input from '../Input/Input';
import Button from '../../Buttons/Button/Button';

import logoImg from '../../../Assets/images/logo.png';

import {
  formStyles,
  loadingStyle,
  headerStyles,
  logoStyles,
  textStyles,
  titleStyles,
  forgotPassowrdStyles,
  registerLinkStyles,
  googleBtnStyles,
  lineStyles,
} from './FormContainer.styles';

const FormContainer = ({ password, btnTitle, havAccount }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} css={formStyles}>
        <div css={headerStyles}>
          <img
            css={logoStyles}
            src={logoImg}
            alt="logo"
            onClick={() => history.push('/')}
          />
          <h3 css={titleStyles}>{havAccount ? 'Login' : 'Register'}</h3>
          <p css={textStyles}>See your growth and get consulting support!</p>
        </div>

        <Button styles={googleBtnStyles} width>
          <FcGoogle size={20} /> Sign in with Google
        </Button>

        <div css={lineStyles}>or Sign in with Email</div>

        {havAccount && (
          <Input
            inputID="email"
            placeholder="Enter your Email"
            label="Email"
            errorMessage="you must enter an email"
            autoFocus
            margin
          />
        )}

        {havAccount && (
          <Input
            inputID="password"
            type={password}
            placeholder="Enter your Password"
            label="Password"
            errorMessage="you must enter a password"
          />
        )}

        {!havAccount && (
          <Input
            inputID="name"
            placeholder="Enter your Name"
            label="Your Name"
            errorMessage="you must enter an email"
            autoFocus
            margin
          />
        )}

        {!havAccount && (
          <Input
            inputID="email"
            placeholder="Enter your Email"
            label="Your Email"
            errorMessage="you must enter an email"
            autoFocus
            margin
          />
        )}

        {havAccount && (
          <Link to="/" css={forgotPassowrdStyles}>
            Forget password?
          </Link>
        )}

        {!loading && <Button width>{btnTitle}</Button>}

        {loading && (
          <Button width>
            <span>
              <AiOutlineLoading size={15} css={loadingStyle} />
            </span>
          </Button>
        )}

        <div css={registerLinkStyles}>
          <span>
            {!havAccount ? 'Already have an account?' : 'Not register yet?'}
          </span>
          <Link
            to={`${havAccount ? '/register' : '/login'}`}
            css={forgotPassowrdStyles}
          >
            {!havAccount ? 'Login' : 'Create an Account'}
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormContainer;
