import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { fetchCategoriesMeals } from '../../Redux/categoriesMeals/categoriesMeals_actions';
import AppCol from '../Responsive/AppCol/AppCol';

import CategoryMealCard from './CategoryMealCard/CategoryMealCard';

const CategoriesMealCard = () => {
  const {
    categoriesMeals: { meals },
  } = useSelector((state) => state.categoriesMeals);

  const dispatch = useDispatch();
  const { mealsCategory } = useParams();

  useEffect(() => {
    dispatch(fetchCategoriesMeals(mealsCategory));
  }, [dispatch, mealsCategory]);

  return (
    <>
      {meals &&
        meals.map((meal) => (
          <AppCol
            key={meal.idMeal}
            cols="col-11 col-md-6 col-lg-4 col-xl-3 mx-auto mb-5"
          >
            <CategoryMealCard meal={meal} />
          </AppCol>
        ))}
    </>
  );
};

export default CategoriesMealCard;
