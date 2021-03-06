/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { formatPrice } from '../../../utils/formatPrice';
import { addCart } from '../../../Redux/cart/cart_actions';

import AddToCartButton from '../../Buttons/AddToCartButton/AddToCartButton';

import {
  cardStyles,
  footerStyles,
  imgContainerStyles,
  imgStyles,
  priceStyles,
  titleStyles,
} from './CategoryMealCard.styles';

const CategoryMealCard = ({ meal }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

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

  const { idMeal: mealPrice, strMealThumb: mealImg, strMeal: mealName } = meal;

  return (
    <div css={cardStyles} className="mb-3">
      <div css={imgContainerStyles}>
        {/* <img src={mealImg} css={imgStyles} alt={mealName} /> */}
        <LazyLoadImage
          src={mealImg}
          css={imgStyles}
          alt={mealName}
          effect="blur"
          className="lazy-load-image-background lazy-load-image-loaded"
        />
      </div>
      <div css={footerStyles}>
        <p css={titleStyles}>{mealName.split(' ').slice(0, 4).join(' ')}</p>
        <p css={priceStyles}>{formatPrice(mealPrice)}</p>
        {/* Add To Card Button */}
        <AddToCartButton
          onClickHandler={onClickHandler}
          isActive={isActive}
          className="btnCart"
          cartIconStyles="cartIconStyles"
        />
      </div>
    </div>
  );
};

export default CategoryMealCard;
