/** @jsxImportSource @emotion/react */

import leafImg from '../../Assets/images/leaf.png';
import { subtitleStyles, titleBoxStyles, titleStyles } from './Title.styles';

const Title = ({ textLeft, subtitle, title }) => {
  return (
    <div css={titleBoxStyles({ textLeft })}>
      <p css={subtitleStyles}>{subtitle}</p>
      <h3 css={titleStyles}>{title}</h3>
      <div>
        <img src={leafImg} alt="leaf" />
      </div>
    </div>
  );
};

export default Title;
