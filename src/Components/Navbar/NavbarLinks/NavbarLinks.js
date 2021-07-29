/** @jsxImportSource @emotion/react */
import { NavLink, useHistory } from 'react-router-dom';
import { BsSearch, BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import ToggleIcon from '../../ToggleIcon/ToggleIcon';

import { navLinks } from '../../../utils/navbarLinks';
import {
  headerStyles,
  navStyles,
  navLinksStyles,
  toggleIconStyles,
} from './NavbarLinks.styles';

const NavbarLinks = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  return (
    <header css={headerStyles}>
      <div className="container">
        <nav css={navStyles}>
          {/* toggle icon */}
          <span css={toggleIconStyles}>
            <ToggleIcon />
          </span>
          {/* search Icon */}
          <span>
            <BsSearch size={30} />
          </span>
          {/* Links */}
          <ul css={navLinksStyles}>
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink exact activeClassName="active-link" to={navLink.path}>
                  {navLink.text}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* cart icon */}
          <span className="cart" onClick={() => history.push('/cart')}>
            <BsBag size={30} />
            <span className="cart-count">{cart.numberCart}</span>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default NavbarLinks;
