/** @jsxImportSource @emotion/react */

import { NavLink } from 'react-router-dom';

import logoImg from '../../Assets/images/logo.png';
import { navLinks } from '../../utils/navbarLinks';

import SocialIcons from '../SocialIcons/SocialIcons';

import {
  linkStyles,
  listStyles,
  logoStyles,
  sidebarStyles,
} from './Sidebar.styles';

const Sidebar = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <aside css={sidebarStyles({ isSidebarActive })}>
      {/* logo */}
      <img src={logoImg} css={logoStyles} alt="logo" />
      {/* links */}
      <ul css={listStyles}>
        {navLinks.map(({ id, text, path }) => (
          <li key={id} onClick={() => setIsSidebarActive(false)}>
            <NavLink
              css={linkStyles}
              to={path}
              activeClassName="activeLink"
              exact
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* social icons */}
      <SocialIcons />
    </aside>
  );
};

export default Sidebar;
