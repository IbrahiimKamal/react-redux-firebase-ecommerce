import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { brandsImages } from '../../utils/brandsImages';
import Title from '../Title/Title';

import './Brand.css';

const Brand = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row pb-5">
          <div className="col-10 mx-auto">
            <Title title="Clients Who Trust Us" subtitle="Our clients" />
          </div>
        </div>

        <Slider {...settings}>
          {brandsImages.map((brand) => (
            <div key={brand.id} className="slick-slide">
              <img src={brand.brandImg} alt={brand.brandImg} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Brand;
