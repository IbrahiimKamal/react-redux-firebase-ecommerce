/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

import logoImg from '../../../Assets/images/logo.png';

import Button from '../../Buttons/Button/Button';
import Input from '../Input/Input';

import {
  formStyles,
  headerStyles,
  loadingStyle,
  logoStyles,
  textStyles,
  titleStyles,
} from '../styles';
import { textAreaStyles } from './styles';

const ContactForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function sendEmailHandler(e) {
    setIsLoading(true);
    e.preventDefault();

    if (!userName || !userEmail || !userMessage) {
      toast.error('Name & Email & Message are required');
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(
        'service_uq0v9mn',
        'template_hbey9at',
        e.target,
        'user_GWrdT1ae6dr56nREI0FrU'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setUserEmail('');
          setUserName('');
          setUserMessage('');
          toast.success('thank you for contacting me');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form onSubmit={sendEmailHandler} css={formStyles}>
      <div css={headerStyles}>
        <img
          css={logoStyles}
          src={logoImg}
          alt="logo"
          onClick={() => history.push('/')}
        />
        <h3 css={titleStyles}>Send Me a Message</h3>
        <p css={textStyles}>See your growth and get consulting support!</p>
      </div>

      <Input
        inputID="name"
        name="name"
        type="text"
        placeholder="Enter your Name"
        label="Name"
        errorMessage="you must enter an name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <Input
        inputID="email"
        name="email"
        type="email"
        placeholder="Enter your Email"
        label="Email"
        errorMessage="you must enter an email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <label htmlFor="message">Your Message</label>
      <br />
      <textarea
        css={textAreaStyles}
        name="message"
        id="message"
        rows="5"
        placeholder="your message"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      ></textarea>

      {!isLoading && <Button width>Send</Button>}

      {isLoading && (
        <Button width>
          <span>
            <AiOutlineLoading size={15} css={loadingStyle} />
          </span>
        </Button>
      )}
    </form>
  );
};

export default ContactForm;
