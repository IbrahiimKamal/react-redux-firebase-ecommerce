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
    speed: 1000,
    autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5 brand">
      <div className="container">
        {/* Slider */}
        <div className="slider-container ">
          <Slider {...settings}>
            {brandsImages.map((brand) => (
              <div key={brand.id} className="slick-slide">
                <img
                  src={brand.brandImg}
                  alt="brand logo"
                  className="slick-img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Brand;
