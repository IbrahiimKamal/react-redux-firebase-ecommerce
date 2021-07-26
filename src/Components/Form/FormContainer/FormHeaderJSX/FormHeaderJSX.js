/** @jsxImportSource @emotion/react */

import { FcGoogle } from 'react-icons/fc';

import logoImg from '../../../../Assets/images/logo.png';
import Button from '../../../Buttons/Button/Button';

import {
  googleBtnStyles,
  headerStyles,
  lineStyles,
  logoStyles,
  textStyles,
  titleStyles,
} from './FormHeaderJSX.styles';

const FormHeaderJSX = ({ register }) => {
  return (
    <>
      <div css={headerStyles}>
        <img css={logoStyles} src={logoImg} alt="logo" />
        <h3 css={titleStyles}>{register ? 'Register' : 'Login'}</h3>
        <p css={textStyles}>See your growth and get consulting support!</p>
      </div>

      <Button styles={googleBtnStyles} width>
        <FcGoogle size={20} /> Sign in with Google
      </Button>

      <div css={lineStyles}>or Sign in with Email</div>
    </>
  );
};

export default FormHeaderJSX;
