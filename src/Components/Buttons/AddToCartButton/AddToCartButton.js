/** @jsxImportSource @emotion/react */

import { IoCartSharp } from 'react-icons/io5';
import { FaBox } from 'react-icons/fa';

import './AddToCartButton.css';

const AddToCartButton = ({
  isActive,
  onClickHandler,
  className,
  cartIconStyles,
}) => {
  return (
    <button
      className={`${
        isActive ? 'cart-button clicked' : 'cart-button'
      } ${className}`}
      onClick={onClickHandler}
    >
      <span className={`${isActive ? 'add-to-cart' : ''} ${cartIconStyles}`}>
        <IoCartSharp size={25} style={{ marginRight: '.5rem' }} /> Add to cart
      </span>
      <IoCartSharp className="shopping-cart-icon" />
      <FaBox className="box" />
    </button>
  );
};

export default AddToCartButton;
