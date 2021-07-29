import { useState } from 'react';
import Banner from '../../Components/Banner/Banner';

import FilterItems from '../../Components/Filters/FilterItems/FilterItems';
import FilterMeals from '../../Components/Filters/FilterMeals/FilterMeals';

import bannerImg from '../../Assets/images/banners/banner1.jpg';

const FilterMealsScreen = () => {
  const [selectMeal, setSelectMeal] = useState('Beef');

  const handleChange = (inputText) => {
    setSelectMeal(inputText);
  };

  return (
    <>
      <Banner bannerImg={bannerImg} bannerHeight="50vh" />

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
    </>
  );
};

export default FilterMealsScreen;
