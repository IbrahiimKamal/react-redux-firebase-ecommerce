import Banner from '../../Components/Banner/Banner';
import CartTable from '../../Components/CartTable/CartTable';

import bannerImg from '../../Assets/images/banners/banner6.jpg';

const CartScreen = () => {
  return (
    <>
      <Banner bannerImg={bannerImg} bannerHeight="35vh" overlay />
      <CartTable />
    </>
  );
};

export default CartScreen;
