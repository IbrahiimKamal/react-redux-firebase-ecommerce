/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import { toast } from 'react-toastify';

import Button from '../../Buttons/Button/Button';
import Input from '../Input/Input';

import logoImg from '../../../Assets/images/logo.png';

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

const RegisterForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
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

    if (!userName || !userEmail) {
      toast.error('Name & Email & Message are required');
      setIsLoading(false);
      return;
    }

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth
      .sendSignInLinkToEmail(userEmail, config)
      .then(() => {
        toast.success(
          `Email is sent to ${userEmail}. Click the link to compelete registration`
        );
        setIsLoading(false);
        // save user email in local storage
        window.localStorage.setItem('emailForRegistration', userEmail);
        window.localStorage.setItem('nameForRegistration', userName);
        setUserEmail('');
        setUserName('');
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
        <h3 css={titleStyles}>Register</h3>
        <p css={textStyles}>See your growth and get consulting support!</p>
      </div>
      {/*
      <Button width styles={googleBtnStyles}>
        <span>
          <FcGoogle size={15} /> <span>Sign In With Google</span>
        </span>
      </Button>

      <header css={lineStyles}>
        <div>Text between Lines</div>
      </header> */}

      <Input
        inputID="name"
        type="text"
        placeholder="Enter your Name"
        label="Name"
        errorMessage="you must enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <Input
        inputID="email"
        type="email"
        placeholder="Enter your Email"
        label="Your Email"
        errorMessage="you must enter an email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      {!isLoading && <Button width>Register</Button>}

      {isLoading && (
        <Button width>
          <span>
            <AiOutlineLoading size={15} css={loadingStyle} />
          </span>
        </Button>
      )}

      <br />

      <div css={registerLinkStyles}>
        <span>Already have an Account?</span>
        <Link to="/login" css={forgotPassowrdStyles}>
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
