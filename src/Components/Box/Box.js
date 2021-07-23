/** @jsxImportSource @emotion/react */

import lineImg from '../../Assets/images/leaf.png';

import { boxStyles, textStyles, imgStyles } from './Box.styles';

const Box = ({ text }) => {
  return (
    <div css={boxStyles}>
      {/* line */}
      <img src={lineImg} alt="line" css={imgStyles} />
      {/* text */}
      <h3 css={textStyles}>{text}</h3>
      {/* line */}
      <img src={lineImg} alt="line" css={imgStyles} />
    </div>
  );
};

export default Box;
