import Banner from '../../Components/Banner/Banner';
import CartTable from '../../Components/CartTable/CartTable';

import cartBanner from '../../Assets/images/banners/banner1.jpg';

const CartScreen = () => {
  return (
    <>
      <Banner bannerImg={cartBanner} bannerHeight="50vh" />
      <CartTable />
    </>
  );
};

export default CartScreen;
