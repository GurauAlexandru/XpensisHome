import './cart-status-bar.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../../context/user.context';

const CartStatusBar = () => {
  const { accountDetails } = useContext(UserContext);

  const { myIncomePercentage, myOutcomePercentage } = accountDetails();

  return (
    <div className='cart-status-bar'>
      <div
        className='cart-status-bar--income'
        style={{ width: `${myIncomePercentage.toFixed(2)}%` }}
      >
        <h4 className='header header--small color-green'>
          ${myIncomePercentage.toFixed(2)}%
        </h4>
        <div className='cart-status-bar--income--progress'></div>
      </div>
      <div
        className='cart-status-bar--outcome'
        style={{ width: `${myOutcomePercentage.toFixed(2)}%` }}
      >
        <h4 className='header header--small color-red'>
          ${myOutcomePercentage.toFixed(2)}%
        </h4>
        <div className='cart-status-bar--outcome--progress'></div>
      </div>
    </div>
  );
};

export default CartStatusBar;
