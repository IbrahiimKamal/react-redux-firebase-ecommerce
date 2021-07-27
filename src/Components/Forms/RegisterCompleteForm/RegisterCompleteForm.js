/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

import Button from '../../Buttons/Button/Button';
import Input from '../Input/Input';

import logoImg from '../../../Assets/images/logo.png';

import { auth } from '../../../Firebase';

import {
  formStyles,
  headerStyles,
  loadingStyle,
  logoStyles,
  textStyles,
  titleStyles,
} from '../styles';

const RegisterCompleteForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setUserEmail(window.localStorage.getItem('emailForRegistration'));
    setUserName(window.localStorage.getItem('nameForRegistration'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userEmail || !userPassword) {
      toast.error('email and password i required');
      return;
    }

    if (userPassword.length < 6) {
      toast.error('password must be 6 words');
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        userEmail,
        window.location.href
      );

      if (result.user.emailVerified) {
        // remove userEmail from local storage
        window.localStorage.removeItem('emailForRegistration');

        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(userPassword);
        await user.updateProfile({
          displayName: userName,
        });
        const idTokenResult = await user.getIdTokenResult();

        // redux store
        console.log(user);

        // redirect
        history.push('/');
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} css={formStyles}>
      <div css={headerStyles}>
        <img css={logoStyles} src={logoImg} alt="logo" />
        <h3 css={titleStyles}>Complete Registration</h3>
        <p css={textStyles}>See your growth and get consulting support!</p>
      </div>

      <Input
        inputID="name"
        type="text"
        label="Your Name"
        value={userName}
        disabled
      />

      <Input
        inputID="email"
        type="email"
        label="Your Email"
        value={userEmail}
        disabled
      />

      <Input
        inputID="password"
        type="password"
        placeholder="Enter your Password"
        label="Password"
        errorMessage="you must enter your name"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />

      {!isLoading && <Button width>Continue</Button>}

      {isLoading && (
        <Button width>
          <span>
            <AiOutlineLoading size={15} css={loadingStyle} />
          </span>
        </Button>
      )}
    </form>
  );
};

export default RegisterCompleteForm;
