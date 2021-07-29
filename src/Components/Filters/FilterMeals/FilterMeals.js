/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryMealCard from '../../CategoriesMealCard/CategoryMealCard/CategoryMealCard';
import SkeletonMeals from '../../Skeletons/SkeletonMeals';

import { fetchCategoriesMeals } from '../../../Redux/filterMeals/filterMeals_actions';
import AppCol from '../../Responsive/AppCol/AppCol';

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
      {!loading
        ? meals &&
          meals.map((meal) => (
            <CategoryMealCard key={meal.idMeal} meal={meal} />
          ))
        : [...Array(10)].map((_, index) => (
            <AppCol key={index} cols="col-11 col-md-5 mx-auto mb-5">
              <SkeletonMeals />
            </AppCol>
          ))}
    </>
  );
};

export default FilterMeals;
