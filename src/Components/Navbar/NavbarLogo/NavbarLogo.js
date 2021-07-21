/** @jsxImportSource @emotion/react */

import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';

import SocialIcons from '../../SocialIcons/SocialIcons';

import logoImage from '../../../Assets/images/logo.png';
import headerBg from '../../../Assets/images/header-bg.png';

import {
  headerStyles,
  navStyles,
  contactStyles,
  socialIcons,
  navLogo,
  bgHeaderStyles,
} from './NavbarLogo.styles';

const NavbarLogo = () => {
  return (
    <>
      <div css={headerStyles}>
        <div className="container">
          {/* Navbar */}
          <nav css={navStyles}>
            {/* Contact */}
            <div css={contactStyles}>
              <span className="contact">
                <AiOutlineMail size={20} />{' '}
                <span>ibrahiim.kamal@gmail.com</span>
              </span>
              <span className="contact">
                <FiPhone size={20} /> <span>+2 011 5376 3481</span>
              </span>
            </div>
            {/* Logo */}
            <div css={navLogo}>
              <img src={logoImage} alt="logo" />
            </div>
            {/* Social Icons */}
            <SocialIcons styles={socialIcons} />
          </nav>
        </div>
      </div>
      <div css={bgHeaderStyles}>
        <img src={headerBg} alt="header background" />
      </div>
    </>
  );
};

export default NavbarLogo;
