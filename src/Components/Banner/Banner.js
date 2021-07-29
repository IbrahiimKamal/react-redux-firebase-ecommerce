/** @jsxImportSource @emotion/react */

import { bannerStyles } from './Banner.styles';

const Banner = ({ bannerImg, bannerHeight }) => {
  return <div css={bannerStyles({ bannerImg, bannerHeight })}></div>;
};

export default Banner;
