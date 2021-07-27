/** @jsxImportSource @emotion/react */

import LoginForm from '../../Components/Forms/LoginForm/LoginForm';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';

import { sectionStyles } from './LoginScreen.styles';

const LoginScreen = () => {
  return (
    <>
      <section css={sectionStyles}>
        <LoginForm password />
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

export default LoginScreen;
