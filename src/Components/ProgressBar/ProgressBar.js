/** @jsxImportSource @emotion/react */

import {
  progressBarStyles,
  progressBarValueStyles,
  titleStyles,
} from './ProgressBar.styles';

const ProgressBar = ({ value, margin, title }) => {
  return (
    <>
      <div css={titleStyles}>
        <span>{title}</span>
        <span>{value}</span>
      </div>

      <div css={progressBarStyles({ margin })}>
        <div css={progressBarValueStyles({ value })}></div>
      </div>
    </>
  );
};

export default ProgressBar;
