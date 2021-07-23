/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

import {
  cardFooterStyles,
  cardStyles,
  fruitImageStyles,
  imgContainerStyles,
  newStyles,
  commonStyles,
} from './MealCard.styles';

import fish from '../../Assets/fish.jpg';
import Button from '../Button/Button';

const MealCard = () => {
  return (
    <>
      <div css={cardStyles}>
        {/* card image */}
        <Link to="/" css={imgContainerStyles}>
          <img css={fruitImageStyles} src={fish} alt="fruit" />
        </Link>
        {/* card footer */}
        <div css={cardFooterStyles}>
          <p css={commonStyles}>Baked salmon with fennel</p>
          <p css={commonStyles}>Egyptian</p>
          <p css={commonStyles}>$22</p>
          <Button />
          <span css={newStyles}>new</span>
        </div>
      </div>
    </>
  );
};

export default MealCard;
