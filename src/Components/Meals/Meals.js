import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MealCard from '../MealCard/MealCard';
import AppCol from '../Responsive/AppCol/AppCol';

import { fetchMeals } from '../../Redux/meals/meals_actions';

const Meals = ({ sliceStart, sliceEnd }) => {
  const { meals } = useSelector((state) => state.allProducts.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  return (
    <>
      {meals &&
        meals.slice(sliceStart, sliceEnd).map((meal) => (
          <AppCol
            key={meal.idMeal}
            cols="col-11 col-md-6 col-lg-4 col-xl-3 mx-auto mb-3"
          >
            <MealCard meal={meal} />
          </AppCol>
        ))}
    </>
  );
};

export default Meals;
