import './cart-item-balance.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const CartItemBalance = ({ currency }) => {
  const { totalBalance } = useContext(UserContext);
  return (
    <div className='cart-item__balance'>
      <h3 className='header h-cart-normal'>Total balace</h3>
      <h2 className='header h-normal'>
        {totalBalance} {currency}
      </h2>
    </div>
  );
};

export default CartItemBalance;
