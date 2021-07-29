/** @jsxImportSource @emotion/react */

import NavbarLogo from './NavbarLogo/NavbarLogo';
import NavbarLinks from './NavbarLinks/NavbarLinks';

import { headerStyles } from './Navbar.styles';

const Navbar = () => {
  return (
    <div css={headerStyles}>
      <NavbarLogo />
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
