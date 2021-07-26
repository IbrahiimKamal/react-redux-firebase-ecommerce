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
      <ParticleBackground />
    </>
  );
};

export default RegisterScreen;
