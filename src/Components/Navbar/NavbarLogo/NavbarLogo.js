/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import firebase from 'firebase';

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
  const [loading, setLoading] = useState(true);
  const { userAuth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (userAuth) {
      setLoading(false);
    }

    if (!userAuth) {
      setLoading(true);
    }
  }, [userAuth, loading]);

  const logoutHandler = () => {
    firebase.auth().signOut();
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });

    history.push('/login');
  };

  return (
    <>
      <div css={headerStyles}>
        <div className="container">
          {/* Navbar */}
          <nav css={navStyles}>
            {/* auth icons */}
            {loading && !userAuth && (
              <div css={contactStyles}>
                <span
                  className="contact"
                  onClick={() => history.push('/login')}
                >
                  <AiOutlineUser size={25} />
                  <span>Login</span>
                </span>
              </div>
            )}

            {userAuth && !loading && (
              <div
                css={contactStyles}
                style={{
                  marginRight: '2rem',
                }}
              >
                <span className="contact">
                  <span>Hello, {userAuth.userDisplayName}</span>
                </span>
              </div>
            )}

            {userAuth && !loading && (
              <div onClick={logoutHandler} css={contactStyles}>
                <span
                  className="contact"
                  onClick={() => history.push('/login')}
                >
                  <IoLogOutOutline size={25} />
                  <span>Logout</span>
                </span>
              </div>
            )}

            {/* Logo */}
            <div css={navLogo} onClick={() => history.push('/')}>
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
