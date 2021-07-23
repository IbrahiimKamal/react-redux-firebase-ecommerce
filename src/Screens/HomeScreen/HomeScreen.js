import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import SectionContainer from '../../Components/Responsive/SectionContainer/SectionContainer';
import AppCol from '../../Components/Responsive/AppCol/AppCol';
import MealCard from '../../Components/MealCard/MealCard';
import Title from '../../Components/Title/Title';
import ServicesCard from '../../Components/ServicesCard/ServicesCard';
import Brand from '../../Components/Brand/Brand';

const HomeScreen = () => {
  return (
    <>
      {/* ###### Banner Section ###### */}
      <BannerSlider />

      {/* ###### Meals Section ###### */}
      <SectionContainer padding="py-5" container="container">
        <AppCol cols="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto mb-3">
          <MealCard />
        </AppCol>
        <AppCol cols="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto mb-3">
          <MealCard />
        </AppCol>
        <AppCol cols="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto mb-3">
          <MealCard />
        </AppCol>
        <AppCol cols="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto mb-3">
          <MealCard />
        </AppCol>
      </SectionContainer>

      {/* ###### Service Card Section ###### */}
      <SectionContainer
        className="section-bg"
        padding="pt-5"
        container="container"
      >
        <AppCol cols="col-10 mx-auto">
          <Title title="services we offer" subtitle="what we do" />
        </AppCol>
      </SectionContainer>

      <SectionContainer
        className="section-bg"
        padding="py-5"
        container="container"
      >
        <ServicesCard />
      </SectionContainer>

      {/* ###### Brand Section ###### */}
      <Brand />
    </>
  );
};

export default HomeScreen;
