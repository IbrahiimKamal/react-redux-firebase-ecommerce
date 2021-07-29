/** @jsxImportSource @emotion/react */

import ContactForm from '../../Components/Forms/ContactForm/ContactForm';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';

import { sectionStyles } from './ContactScreen.styles';

const ContactScreen = () => {
  return (
    <>
      <section css={sectionStyles}>
        <ContactForm />
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

export default ContactScreen;
