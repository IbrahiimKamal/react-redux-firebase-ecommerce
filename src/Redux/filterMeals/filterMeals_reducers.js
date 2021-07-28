import { filterCategoriesTypes } from './filterMeals_types';

const initProduct = {
  filterInput: 'Beef',
  filterCategoriesMeals: [],
  loading: false,
  error: null,
};

function filterCategoriesReducer(state = initProduct, { type, payload }) {
  switch (type) {
    case filterCategoriesTypes.FETCH_ALL_FILTER_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };

    case filterCategoriesTypes.FETCH_ALL_FILTER_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        filterCategoriesMeals: payload,
      };

    case filterCategoriesTypes.FETCH_ALL_FILTER_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}

export default filterCategoriesReducer;
