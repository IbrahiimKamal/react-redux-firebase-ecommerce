import AppCol from '../Responsive/AppCol/AppCol';
import CategoryCard from './CategoryCard/CategoryCard';

import { categories } from '../../utils/categories';

const Categories = () => {
  return (
    <>
      {categories.map((category) => (
        <AppCol
          key={category.id}
          cols="col-11 col-md-6 col-lg-4 col-xl-3 mx-auto mb-4"
        >
          <CategoryCard category={category} />
        </AppCol>
      ))}
    </>
  );
};

export default Categories;
