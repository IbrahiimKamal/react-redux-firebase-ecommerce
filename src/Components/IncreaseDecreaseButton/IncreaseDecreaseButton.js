/** @jsxImportSource @emotion/react */

import { useDispatch } from 'react-redux';

import {
  decreaseQuantity,
  increaseQuantity,
} from '../../Redux/cart/cart_actions';

import {
  btnValueStyles,
  decreaseBtnStyles,
  increaseBtnStyles,
  numberStyles,
  qtyStyles,
} from './IncreaseDecreaseButton.styles';

const IncreaseDecreaseButton = ({ itemKey, qty }) => {
  const dispatch = useDispatch();

  return (
    <div css={qtyStyles}>
      <button
        css={[btnValueStyles, decreaseBtnStyles]}
        onClick={() => dispatch(decreaseQuantity(itemKey))}
      >
        -
      </button>
      <div css={numberStyles}>{qty}</div>
      <button
        css={[btnValueStyles, increaseBtnStyles]}
        onClick={() => dispatch(increaseQuantity(itemKey))}
      >
        +
      </button>
    </div>
  );
};

export default IncreaseDecreaseButton;
