import callApi from '../../Api';

import { productsTypes } from './meals_types';

const fetchMealsStart = () => ({
  type: productsTypes.FETCH_ALL_PRODUCT_START,
});

const fetchMealsSuccess = (meals) => ({
  type: productsTypes.FETCH_ALL_PRODUCT_SUCCESS,
  payload: meals,
});

const fetchMealsFail = (error) => ({
  type: productsTypes.FETCH_ALL_PRODUCT_FAIL,
  payload: error,
});

export function fetchMeals() {
  return (dispatch) => {
    dispatch(fetchMealsStart());
    callApi('/search.php?s=')
      .then((response) => {
        const meals = response.data;
        dispatch(fetchMealsSuccess(meals));
      })
      .catch((error) => {
        dispatch(fetchMealsFail(error));
      });
  };
}
