/** @jsxImportSource @emotion/react */

import { useHistory } from 'react-router';

import { contactInfo, myAccount } from '../../utils/footerInfo';
import siteLogo from '../../Assets/images/logo.png';
import paymentLogo from '../../Assets/images/payment.png';

import SocialIcons from '../../Components/SocialIcons/SocialIcons';

import {
  btnStyles,
  contenTexttStyles,
  contenTitletStyles,
  contentStyles,
  footerStyles,
  formStyles,
  headerStyles,
  infoStyles,
  inputStyles,
  logoStyles,
  textStyles,
  titleStyles,
} from './Footer.styles';

const Footer = () => {
  const history = useHistory();

  return (
    <section className="py-5" css={footerStyles}>
      <div className="container">
        {/* footer header */}
        <div className="row" css={headerStyles}>
          <div className="col-10 col-lg-2 mx-auto">
            <img
              src={siteLogo}
              alt="logo"
              css={logoStyles}
              onClick={() => history.push('/')}
            />
          </div>
          <div className="col-10 col-lg-5 mx-auto">
            <h5 css={titleStyles}>SUBSCRIBE TO OUR NEWSLETTER</h5>
            <p css={textStyles}>
              Get all the latest information on Events, Sales and Offers.
            </p>
          </div>
          <div className="col-10 col-lg-5 mx-auto">
            <form onSubmit={(e) => e.preventDefault()} css={formStyles}>
              <input
                type="email"
                css={inputStyles}
                placeholder="your email..."
              />
              <input type="submit" css={btnStyles} value="subscribe" />
            </form>
          </div>
        </div>
        {/* footer content */}
        <div className="row">
          <div className="col-10 col-lg-4 mx-auto" css={contentStyles}>
            <h5 css={contenTitletStyles}>CONTACT INFO</h5>
            {contactInfo.map((item) => {
              const { id, text } = item;
              return (
                <p css={contenTexttStyles} key={id}>
                  <span>{text}</span>
                </p>
              );
            })}
          </div>
          <div className="col-10 col-lg-4 mx-auto" css={contentStyles}>
            <h5 css={contenTitletStyles}>MY ACCOUNT</h5>
            {myAccount.map((item) => {
              const { id, text } = item;
              return (
                <p css={contenTexttStyles} key={id}>
                  {text}
                </p>
              );
            })}
          </div>
          <div className="col-10 col-lg-4 mx-auto" css={contentStyles}>
            <h5 css={contenTitletStyles}>MY ACCOUNT</h5>
            {myAccount.map((item) => {
              const { id, text } = item;
              return (
                <p css={contenTexttStyles} key={id}>
                  {text}
                </p>
              );
            })}
          </div>
        </div>
        {/* footer footer */}
        <div className="row">
          {/* payment logo */}
          <div className="col-10 col-lg-4 mx-auto">
            <img src={paymentLogo} alt="payment" />
          </div>
          {/* copy rights */}
          <div className="col-10 col-lg-4 mx-auto">
            <span css={infoStyles}>
              <span className="author">Ibrahim Kamal</span>
              &copy; {new Date().getFullYear()}. All Rights Reserved
            </span>
          </div>
          {/* social icons */}
          <div className="col-10 col-lg-4 mx-auto">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
