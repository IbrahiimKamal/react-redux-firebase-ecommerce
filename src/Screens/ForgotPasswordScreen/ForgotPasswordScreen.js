/** @jsxImportSource @emotion/react */

import ForgotPasswordForm from '../../Components/Forms/ForgotPasswordForm/ForgotPasswordForm';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';

import { sectionStyles } from './ForgotPasswordScreen.styles';

const ForgotPasswordScreen = () => {
  return (
    <>
      <section css={sectionStyles}>
        <ForgotPasswordForm />
      </section>
      <ParticleBackground
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="120%"
        background="black"
      />
    </>
  );
};

export default ForgotPasswordScreen;
