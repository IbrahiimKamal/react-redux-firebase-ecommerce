/** @jsxImportSource @emotion/react */

import FormContainer from './FormContainer/FormContainer';

const Form = ({ password, btnTitle, havAccount }) => {
  return (
    <FormContainer
      password={password}
      btnTitle={btnTitle}
      havAccount={havAccount}
    />
  );
};

export default Form;
