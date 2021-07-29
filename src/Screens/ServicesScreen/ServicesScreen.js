import bannerImg from '../../Assets/images/banners/banner4.jpg';
import Banner from '../../Components/Banner/Banner';
import AppCol from '../../Components/Responsive/AppCol/AppCol';
import SectionContainer from '../../Components/Responsive/SectionContainer/SectionContainer';
import ServicesCard from '../../Components/ServicesCard/ServicesCard';
import Title from '../../Components/Title/Title';
import Brand from '../../Components/Brand/Brand';
import OffersCard from '../../Components/ServicesCard/OffersCard/OffersCard';

const ServicesScreen = () => {
  return (
    <>
      <Banner bannerImg={bannerImg} bannerHeight="50vh" overlay />

      <SectionContainer padding="py-5">
        <AppCol cols="col-10 mx-auto">
          <Title title="services we offer" subtitle="what we do" />
        </AppCol>
      </SectionContainer>

      <SectionContainer padding="pb-5">
        <OffersCard />
      </SectionContainer>

      <SectionContainer className="section-bg" padding="pt-5">
        <AppCol cols="col-10 mx-auto">
          <Title title="services we offer" subtitle="what we do" />
        </AppCol>
      </SectionContainer>

      <SectionContainer className="section-bg" padding="pt-5">
        <ServicesCard />
      </SectionContainer>

      <div className="py-5 section-bg">
        <Brand borderNone />
      </div>
    </>
  );
};

export default ServicesScreen;
