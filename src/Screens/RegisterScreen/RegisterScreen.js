/** @jsxImportSource @emotion/react */

import Form from '../../Components/Form';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';

import { sectionStyles } from './RegisterScreen.styles';

const RegisterScreen = () => {
  return (
    <>
      <section css={sectionStyles}>
        <Form password="password" btnTitle="Register" />
      </section>
      <ParticleBackground
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="black"
      />
      <ParticleBackground
        position="static"
        width="100%"
        height="300px"
        background="black"
      />
    </>
  );
};

export default RegisterScreen;
