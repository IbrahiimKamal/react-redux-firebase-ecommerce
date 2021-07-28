import { categoriesTypes } from './categoriesMeals_types';

const initProduct = {
  categoriesMeals: [],
  loading: false,
  error: null,
};

function categoriesMealsReducer(state = initProduct, { type, payload }) {
  switch (type) {
    case categoriesTypes.FETCH_ALL_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };

    case categoriesTypes.FETCH_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categoriesMeals: payload,
      };

    case categoriesTypes.FETCH_ALL_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}

export default categoriesMealsReducer;
