import { cartTypes } from './cart_types';

export const getNumberCart = () => {
  return {
    type: cartTypes.GET_NUMBER_CART,
  };
};

export const addCart = (payload) => {
  return {
    type: cartTypes.ADD_CART,
    payload,
  };
};

export const increaseQuantity = (payload) => {
  return {
    type: cartTypes.INCREASE_QUANTITY,
    payload,
  };
};

export const decreaseQuantity = (payload) => {
  return {
    type: cartTypes.DECREASE_QUANTITY,
    payload,
  };
};

export function deleteCart(payload) {
  return {
    type: cartTypes.DELETE_CART,
    payload,
  };
}
