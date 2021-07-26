/** @jsxImportSource @emotion/react */

import { useHistory } from 'react-router-dom';

import Input from '../Input/Input';
import Button from '../../Buttons/Button/Button';

import logoImg from '../../../Assets/images/logo.png';

import {
  formStyles,
  headerStyles,
  logoStyles,
  textStyles,
  titleStyles,
} from './FormContainer.styles';

const FormContainer = ({ styles }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} css={[formStyles, styles]}>
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
        type="text"
        placeholder="Enter your Email"
        label="Email"
        errorMessage="you must enter an email"
      />

      <Input
        inputID="password"
        type="password"
        placeholder="Enter your Password"
        label="Password"
        errorMessage="you must enter a password"
      />
      <Button width>Login</Button>
    </form>
  );
};

export default FormContainer;
