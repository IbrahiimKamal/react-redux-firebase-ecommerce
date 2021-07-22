import { combineReducers } from 'redux';

import mealsReducer from './meals/meals_reducers';

const appReducers = combineReducers({
  allProducts: mealsReducer,
});

export default appReducers;
