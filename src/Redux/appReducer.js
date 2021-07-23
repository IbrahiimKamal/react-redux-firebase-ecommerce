import { combineReducers } from 'redux';
import cartReducer from './cart/cart_reducers';

import mealsReducer from './meals/meals_reducers';

const appReducers = combineReducers({
  allProducts: mealsReducer,
  cart: cartReducer,
});

export default appReducers;
