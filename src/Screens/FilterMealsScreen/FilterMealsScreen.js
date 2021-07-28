import { useState } from 'react';

import FilterItems from '../../Components/Filters/FilterItems/FilterItems';
import FilterMeals from '../../Components/Filters/FilterMeals/FilterMeals';

const FilterMealsScreen = () => {
  const [selectMeal, setSelectMeal] = useState('Beef');

  const handleChange = (inputText) => {
    setSelectMeal(inputText);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <FilterItems handleChange={handleChange} />
          </div>

          <div className="col-md-9">
            <div>
              <div>
                <div className="row">
                  <FilterMeals selectMeal={selectMeal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterMealsScreen;
