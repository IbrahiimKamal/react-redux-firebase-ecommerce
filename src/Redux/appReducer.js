import { combineReducers } from 'redux';
import cartReducer from './cart/cart_reducers';

import mealsReducer from './meals/meals_reducers';
import userReducer from './userAuth/userAuth_reducers';
import categoriesMealsReducer from './categoriesMeals/categoriesMeals_reducers';

const appReducers = combineReducers({
  allProducts: mealsReducer,
  cart: cartReducer,
  userAuth: userReducer,
  categoriesMeals: categoriesMealsReducer,
});

export default appReducers;
