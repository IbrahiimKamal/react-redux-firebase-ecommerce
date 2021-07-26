/** @jsxImportSource @emotion/react */

import FormHeaderJSX from './FormHeaderJSX/FormHeaderJSX';
import LoginFormJSX from './LoginFormJSX/LoginFormJSX';
import RegisterFormJSX from './RegisterFormJSX/RegisterFormJSX';

import { formStyles } from './FormContainer.styles';

const FormContainer = ({ password, register }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} css={formStyles}>
        {<FormHeaderJSX register={register} />}

        {!register && <LoginFormJSX password={password} />}

        {register && <RegisterFormJSX />}
      </form>
    </>
  );
};

export default FormContainer;
