import { css } from '@emotion/react';

export const bannerStyles = ({ bannerImg, bannerHeight, overlay }) => css`
  display: none;
  min-height: ${bannerHeight};
  width: 100%;
  background-image: url(${bannerImg});
  background-position: center center;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ${overlay &&
  `
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  `}

  @media (min-width: 992px) {
    display: block;
  }
`;
