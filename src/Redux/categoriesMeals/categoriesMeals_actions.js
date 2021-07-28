import callApi from '../../Api';

import { categoriesTypes } from './categoriesMeals_types';

const fetchMealsStart = () => ({
  type: categoriesTypes.FETCH_ALL_CATEGORIES_START,
});

const fetchMealsSuccess = (meals) => ({
  type: categoriesTypes.FETCH_ALL_CATEGORIES_SUCCESS,
  payload: meals,
});

const fetchMealsFail = (error) => ({
  type: categoriesTypes.FETCH_ALL_CATEGORIES_FAIL,
  payload: error,
});

export function fetchCategoriesMeals(category) {
  return (dispatch) => {
    dispatch(fetchMealsStart());
    callApi(`/filter.php?c=${category}`)
      .then((response) => {
        const meals = response.data;
        dispatch(fetchMealsSuccess(meals));
      })
      .catch((error) => {
        dispatch(fetchMealsFail(error));
      });
  };
}
