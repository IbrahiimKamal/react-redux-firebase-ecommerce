/** @jsxImportSource @emotion/react */

import RegisterCompleteForm from '../../Components/Forms/RegisterCompleteForm/RegisterCompleteForm';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';

import { sectionStyles } from './RegisterCompleteScreen.styles';

const RegisterCompleteScreen = () => {
  return (
    <>
      <section css={sectionStyles}>
        <RegisterCompleteForm />
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

export default RegisterCompleteScreen;
