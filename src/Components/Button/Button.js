/** @jsxImportSource @emotion/react */

import { IoCartSharp } from 'react-icons/io5';
import { FaBox } from 'react-icons/fa';

import './ButtonStyles.css';

const Button = ({ isActive, onClickHandler }) => {
  return (
    <button
      className={`${isActive ? 'cart-button clicked' : 'cart-button'}`}
      onClick={onClickHandler}
    >
      <span className={`${isActive ? 'add-to-cart' : ''}`}>
        <IoCartSharp size={25} style={{ marginRight: '.5rem' }} /> Add to cart
      </span>
      <IoCartSharp className="fa-shopping-cart" />
      <FaBox className="fa-box" />
    </button>
  );
};

export default Button;
