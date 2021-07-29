/** @jsxImportSource @emotion/react */

import { bannerStyles } from './Banner.styles';

const Banner = ({ bannerImg, bannerHeight, overlay }) => {
  return <div css={bannerStyles({ bannerImg, bannerHeight, overlay })}></div>;
};

export default Banner;
