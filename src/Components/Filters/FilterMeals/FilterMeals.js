/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryMealCard from '../../CategoriesMealCard/CategoryMealCard/CategoryMealCard';

import { fetchCategoriesMeals } from '../../../Redux/filterMeals/filterMeals_actions';

const FilterMeals = ({ selectMeal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    filterCategoriesMeals: { meals },
    loading,
  } = useSelector((state) => state.filterMeals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesMeals(selectMeal));
  }, [dispatch, selectMeal]);

  return (
    <>
      {!loading &&
        meals &&
        meals.map((meal) => <CategoryMealCard key={meal.idMeal} meal={meal} />)}
    </>
  );
};

export default FilterMeals;
