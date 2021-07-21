/** @jsxImportSource @emotion/react */
import { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch, BsBag } from 'react-icons/bs';

import ToggleIcon from '../../ToggleIcon/ToggleIcon';

import { navLinks } from '../../../utils/navbarLinks';
import { headerStyles, navStyles, navLinksStyles } from './NavbarLinks.styles';

const NavbarLinks = () => {
  const [state, setState] = useState(false);

  useLayoutEffect(() => {
    if (window.matchMedia('(min-width: 992px)').matches) {
      setState(true);
    }
  }, [state]);

  return (
    <header css={headerStyles}>
      <div className="container">
        <nav css={navStyles}>
          {/* toggle icon */}
          {!state ? <ToggleIcon /> : null}
          {/* search Icon */}
          <span>
            <BsSearch size={30} />
          </span>
          {/* Links */}
          {state ? (
            <ul css={navLinksStyles}>
              {navLinks.map((navLink) => (
                <li key={navLink.id}>
                  <NavLink
                    exact
                    activeClassName="active-link"
                    to={navLink.path}
                  >
                    {navLink.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : null}
          {/* cart icon */}
          <span className="cart">
            <BsBag size={30} />
            <span className="cart-count">22</span>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default NavbarLinks;
