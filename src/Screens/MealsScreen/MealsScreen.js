import Banner from '../../Components/Banner/Banner';
import CategoriesMealCard from '../../Components/CategoriesMealCard/CategoriesMealCard';
import SectionContainer from '../../Components/Responsive/SectionContainer/SectionContainer';

import bannerImg from '../../Assets/images/banners/banner1.jpg';

const MealsScreen = () => {
  return (
    <>
      <Banner bannerImg={bannerImg} bannerHeight="50vh" />

      <SectionContainer padding="py-5">
        <CategoriesMealCard />
      </SectionContainer>
    </>
  );
};

export default MealsScreen;
