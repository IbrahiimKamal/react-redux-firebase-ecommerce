/** @jsxImportSource @emotion/react */

import Form from '../../Components/Form';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';

import { sectionStyles } from './RegisterScreen.styles';

const RegisterScreen = () => {
  return (
    <>
      <section css={sectionStyles}>
        <Form register />
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
