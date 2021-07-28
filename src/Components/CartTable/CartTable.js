/** @jsxImportSource @emotion/react */

import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { deleteCart } from '../../Redux/cart/cart_actions';

import { formatPrice } from '../../utils/formatPrice';
import IncreaseDecreaseButton from '../Buttons/IncreaseDecreaseButton/IncreaseDecreaseButton';

import styles from './CartTable.module.css';

const CartTable = () => {
  const { Carts } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  let ListCart = [];
  let TotalCart = 0;

  Object.keys(Carts).forEach(function (item) {
    TotalCart += Carts[item].quantity * Carts[item].price;
    ListCart.push(Carts[item]);
  });

  function TotalPrice(price, qty) {
    return formatPrice(price * qty);
  }

  return (
    <section className="py-5">
      {ListCart.length !== 0 && (
        <div className="container">
          <table className={styles.tableStyles}>
            <thead>
              <tr>
                <th className={styles.thStyles}>Product</th>
                <th className={styles.thStyles}></th>
                <th className={styles.thStyles}>Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {ListCart.map((item, key) => (
                <tr key={item.id}>
                  <td className={styles.tdStyles}>
                    <div className={styles.cartInfo}>
                      {/* <img
                        className={styles.cartImg}
                        src={item.image}
                        alt={item.name}
                      /> */}

                      <LazyLoadImage
                        className={`${styles.cartImg} lazy-load-image-background lazy-load-image-loaded`}
                        src={item.image}
                        alt={item.name}
                        effect="blur"
                      />

                      <div>
                        <p>{item.name}</p>
                        <small>Price: {formatPrice(item.price)}</small>
                        <br />
                        <span onClick={() => dispatch(deleteCart(key))}>
                          Remove
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className={styles.tdStyles}>
                    <IncreaseDecreaseButton qty={item.quantity} itemKey={key} />
                  </td>

                  <td className={styles.tdStyles}>
                    {TotalPrice(item.price, item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.totalPrice}>
            <table className={styles.totalPriceTable}>
              <tfoot>
                <tr>
                  <td className={styles.tdStyles}>Total</td>
                  <td className={styles.tdStyles}>{formatPrice(TotalCart)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {ListCart.length === 0 && <h1>No Items Found</h1>}
    </section>
  );
};

export default CartTable;
