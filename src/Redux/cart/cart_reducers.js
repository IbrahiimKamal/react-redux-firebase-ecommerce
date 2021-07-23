import { cartTypes } from './cart_types';

const initProduct = {
  numberCart: 0,
  Carts: [],
};

function cartReducer(state = initProduct, action) {
  switch (action.type) {
    case cartTypes.GET_NUMBER_CART:
      return {
        ...state,
      };

    case cartTypes.ADD_CART:
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.idMeal,
          quantity: 1,
          name: action.payload.strMeal,
          image: action.payload.strMealThumb,
          price: +action.payload.idMeal,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.forEach((item, key) => {
          if (item.id === action.payload.idMeal) {
            state.Carts[key].quantity++;
            check = true;
          }
        });

        if (!check) {
          let _cart = {
            id: action.payload.idMeal,
            quantity: 1,
            name: action.payload.strMeal,
            image: action.payload.strMealThumb,
            price: +action.payload.idMeal,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

    case cartTypes.INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;
      return {
        ...state,
      };

    case cartTypes.DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default cartReducer;
