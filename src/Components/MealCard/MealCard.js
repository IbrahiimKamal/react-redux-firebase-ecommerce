/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

import { formatPrice } from '../../utils/formatPrice';

import {
  cardFooterStyles,
  cardStyles,
  fruitImageStyles,
  imgContainerStyles,
  newStyles,
  commonStyles,
  cardInfoStyles,
} from './MealCard.styles';

import Button from '../Button/Button';

const MealCard = ({ meal }) => {
  const {
    strMealThumb: mealImg,
    strMeal: mealName,
    strArea: mealArea,
    idMeal: mealPrice,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  } = meal;

  return (
    <>
      <div css={cardStyles}>
        {/* card image */}
        <Link to="/" css={imgContainerStyles}>
          <img css={fruitImageStyles} src={mealImg} alt="fruit" />
        </Link>
        {/* card footer */}
        <div css={cardFooterStyles}>
          <div css={cardInfoStyles}>
            <span css={commonStyles}>{mealArea}</span>
            <span css={commonStyles}>{mealName}</span>
            <span css={commonStyles}>{strIngredient1}</span>
            <span css={commonStyles}>{strIngredient2}</span>
            <span css={commonStyles}>{strIngredient3}</span>
            <span css={commonStyles}>{strIngredient4}</span>
          </div>
          <span
            css={commonStyles}
            style={{
              marginTop: '1rem',
            }}
          >
            {formatPrice(mealPrice)}
          </span>
          {/* Add To Card Button */}
          <Button />

          {/* New Item */}
          {(mealArea.toLowerCase().trim() === 'egyptian' ||
            mealArea.toLowerCase().trim() === 'italian') && (
            <span css={newStyles}>new</span>
          )}
        </div>
      </div>
    </>
  );
};

export default MealCard;
