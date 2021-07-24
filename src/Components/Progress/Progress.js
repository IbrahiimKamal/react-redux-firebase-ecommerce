/** @jsxImportSource @emotion/react */

import ProgressBar from '../ProgressBar/ProgressBar';
import Title from '../Title/Title';

import { cardStyles, textStyles } from './Progress.styles';

const Progress = () => {
  return (
    <div css={cardStyles}>
      {/* Title */}
      <Title title="BESTSELLER PRODUCTS" subtitle="GROWING PRODUCTS" />
      {/* Info */}
      <p css={textStyles}>
        Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit
        sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo
        sit met entum cubilia crae onec.
      </p>
      {/* Progress Bar */}
      <ProgressBar title="Agriculture" value="68%" margin="1.5rem" />
      <ProgressBar title="Organic" value="90%" />
    </div>
  );
};

export default Progress;
