import './cart-balance.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../../context/user.context';

const CartBalance = () => {
  const { accountDetails, myLocaleOption, locale } = useContext(UserContext);
  const { totalBalance } = accountDetails();
  return (
    <>
      <h3 className='header h-cart-normal'>Total balace</h3>
      <h2 className='header h-normal'>
        {totalBalance.toLocaleString(`${locale}`, myLocaleOption)}
      </h2>
    </>
  );
};

export default CartBalance;
