import callApi from '../../Api';

import { filterCategoriesTypes } from './filterMeals_types';

const fetchMealsStart = () => ({
  type: filterCategoriesTypes.FETCH_ALL_FILTER_CATEGORIES_START,
});

const fetchMealsSuccess = (meals) => ({
  type: filterCategoriesTypes.FETCH_ALL_FILTER_CATEGORIES_SUCCESS,
  payload: meals,
});

const fetchMealsFail = (error) => ({
  type: filterCategoriesTypes.FETCH_ALL_FILTER_CATEGORIES_FAIL,
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
