/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { AiOutlineLoading } from 'react-icons/ai';

import { auth } from '../../../Firebase';

import logoImg from '../../../Assets/images/logo.png';

import Input from '../Input/Input';
import Button from '../../Buttons/Button/Button';

import {
  formStyles,
  headerStyles,
  loadingStyle,
  logoStyles,
  textStyles,
  titleStyles,
} from '../styles';

const ForgotPasswordForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { userAuth } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (userAuth && userAuth.token) {
      history.push('/');
    }
  }, [history, userAuth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(userEmail, config)
      .then(() => {
        setUserEmail('');
        setIsLoading(false);
        toast.success('Check your email for password reset link');
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} css={formStyles}>
      <div css={headerStyles}>
        <img
          css={logoStyles}
          src={logoImg}
          alt="logo"
          onClick={() => history.push('/')}
        />
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

      {!isLoading && (
        <Button bgColor="#F25387" width>
          Submit
        </Button>
      )}

      {isLoading && (
        <Button bgColor="#032F58" width>
          <span>
            <AiOutlineLoading size={15} css={loadingStyle} />
          </span>
        </Button>
      )}
    </form>
  );
};

export default ForgotPasswordForm;
