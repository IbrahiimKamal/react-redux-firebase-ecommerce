/** @jsxImportSource @emotion/react */

import Form from '../../Components/Form';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';

import { sectionStyles } from './LoginScreen.styles';

const LoginScreen = () => {
  return (
    <>
      <section css={sectionStyles}>
        <Form password="password" btnTitle="Login" havAccount />
      </section>
      <ParticleBackground />
    </>
  );
};

export default LoginScreen;
