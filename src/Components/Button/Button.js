/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { IoCartSharp } from 'react-icons/io5';
import { FaBox } from 'react-icons/fa';

import './ButtonStyles.css';

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(false);
        console.log('hiiii');
      }, 1500);
    }

    return () => clearTimeout();
  }, [isActive]);

  return (
    <button
      className={`${isActive ? 'cart-button clicked' : 'cart-button'}`}
      onClick={() => setIsActive(true)}
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
