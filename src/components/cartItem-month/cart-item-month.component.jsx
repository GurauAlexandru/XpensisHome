import './cart-item-month.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const CartItemMonth = () => {
  const { month, year } = useContext(UserContext);
  return (
    <div className='cart-item__month'>
      <h3 className='header h-small'>{month}</h3>
      <h3 className='header h-cart-huge'>{year}</h3>
    </div>
  );
};

export default CartItemMonth;

/**
 * de adaugat o optiune pentru a selecta luna si anul
 */
