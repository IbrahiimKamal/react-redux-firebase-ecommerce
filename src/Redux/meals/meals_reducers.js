import { productsTypes } from './meals_types';

const initProduct = {
  meals: [],
  loading: false,
  error: null,
};

function mealsReducer(state = initProduct, { type, payload }) {
  switch (type) {
    case productsTypes.FETCH_ALL_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };

    case productsTypes.FETCH_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        meals: payload,
      };

    case productsTypes.FETCH_ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}

export default mealsReducer;
