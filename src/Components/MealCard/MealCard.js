/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../utils/formatPrice';

import { addCart } from '../../Redux/cart/cart_actions';

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
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(false);
      }, 1500);
    }
  }, [isActive]);

  const onClickHandler = () => {
    setIsActive(true);
    dispatch(addCart(meal));
  };

  return (
    <>
      <div css={cardStyles}>
        {/* card image */}
        <Link to="/cart" css={imgContainerStyles}>
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
          <Button onClickHandler={onClickHandler} isActive={isActive} />

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
