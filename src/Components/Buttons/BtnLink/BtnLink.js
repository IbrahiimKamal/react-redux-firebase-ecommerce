/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

import { btnStyles } from './BtnLink.styles';

const BtnLink = ({ title }) => {
  return (
    <Link to="/our-products" css={btnStyles}>
      {title}
    </Link>
  );
};

export default BtnLink;
