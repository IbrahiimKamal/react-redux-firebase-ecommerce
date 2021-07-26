/** @jsxImportSource @emotion/react */

import { useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import Button from '../../Buttons/Button/Button';
import LoginFormJSX from './LoginFormJSX/LoginFormJSX';
import RegisterFormJSX from './RegisterFormJSX/RegisterFormJSX';

import logoImg from '../../../Assets/images/logo.png';

import {
  formStyles,
  headerStyles,
  logoStyles,
  textStyles,
  titleStyles,
  googleBtnStyles,
  lineStyles,
} from './FormContainer.styles';

const FormContainer = ({ password, btnTitle, havAccount }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formHeaderJSX = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} css={formStyles}>
        {/* Form Header JSX */}
        {formHeaderJSX()}

        {/* Lonin Form JSX */}
        {havAccount && <LoginFormJSX password={password} btnTitle={btnTitle} />}

        {/* Register Form JSX */}
        {!havAccount && <RegisterFormJSX btnTitle={btnTitle} />}
      </form>
    </>
  );
};

export default FormContainer;
