import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import SectionContainer from '../../Components/Responsive/SectionContainer/SectionContainer';
import AppCol from '../../Components/Responsive/AppCol/AppCol';
import Title from '../../Components/Title/Title';
import ServicesCard from '../../Components/ServicesCard/ServicesCard';
import Brand from '../../Components/Brand/Brand';
import Box from '../../Components/Box/Box';
import Meals from '../../Components/Meals/Meals';

const HomeScreen = () => {
  return (
    <>
      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• Banner Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}
      <BannerSlider />
      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• End Banner Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}

      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• Service Card Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}
      {/* Title Component */}
      <SectionContainer className="section-bg" padding="pt-5">
        <AppCol cols="col-10 mx-auto">
          <Title title="services we offer" subtitle="what we do" />
        </AppCol>
      </SectionContainer>

      {/* Services Card Component */}
      <SectionContainer className="section-bg" padding="py-5">
        <ServicesCard />
      </SectionContainer>
      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• End Service Card Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}

      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• Meals Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}
      {/* Title Component */}
      <SectionContainer padding="pt-5">
        <AppCol cols="col-10 mx-auto">
          <Title title="FEATURED PRODUCTS" subtitle="our products" />
        </AppCol>
      </SectionContainer>

      <SectionContainer padding="py-5">
        <Meals sliceStart={0} sliceEnd={8} />
      </SectionContainer>
      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• End Meals Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}

      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• Brand Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}
      {/* Title */}
      <SectionContainer padding="pt-5" className="section-bg">
        <AppCol cols="col-10 mx-auto">
          <Title title="Clients Who Trust Us" subtitle="Our clients" />
        </AppCol>
      </SectionContainer>

      {/* Brand Component */}
      <Brand />

      {/* Box Component */}
      <SectionContainer padding="py-5" className="section-bg">
        <AppCol cols="col-11 col-md-6 mx-auto mb-3">
          <Box text="We Sale Best Agriculture Products" />
        </AppCol>
        <AppCol cols="col-11 col-md-6 mx-auto ">
          <Box text="We’ve 40 years experience in field" />
        </AppCol>
      </SectionContainer>
      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• End Brand Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}

      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• Meals Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}
      {/* Title Component */}
      <SectionContainer padding="pt-5">
        <AppCol cols="col-10 mx-auto">
          <Title title="BESTSELLER PRODUCTS" subtitle="our products" />
        </AppCol>
      </SectionContainer>

      <SectionContainer padding="py-5">
        <Meals sliceStart={8} sliceEnd={16} />
      </SectionContainer>
      {/* [[[[[[[[[[[[[[[[[[[[[[[ •• End Meals Section •• ]]]]]]]]]]]]]]]]]]]]]]] */}
    </>
  );
};

export default HomeScreen;
