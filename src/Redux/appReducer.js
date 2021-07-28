import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import mealsReducer from './meals/meals_reducers';
import cartReducer from './cart/cart_reducers';
import userReducer from './userAuth/userAuth_reducers';
import categoriesMealsReducer from './categoriesMeals/categoriesMeals_reducers';

const persistConfig = {
  key: 'quoality-guest',
  storage,
  whitelist: ['cart'],
};

const appReducers = combineReducers({
  allProducts: mealsReducer,
  cart: cartReducer,
  userAuth: userReducer,
  categoriesMeals: categoriesMealsReducer,
});

export default persistReducer(persistConfig, appReducers);
