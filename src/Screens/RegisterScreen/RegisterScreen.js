/** @jsxImportSource @emotion/react */

import RegisterForm from '../../Components/Forms/RegisterForm/RegisterForm';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';

import { sectionStyles } from './RegisterScreen.styles';

const RegisterScreen = () => {
  return (
    <>
      <section css={sectionStyles}>
        <RegisterForm />
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

export default RegisterScreen;
