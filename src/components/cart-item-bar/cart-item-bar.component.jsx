import './cart-item-bar.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const CartItemBar = () => {
  const { accountDetails } = useContext(UserContext);

  const { myIncomePercentage, myOutcomePercentage } = accountDetails();

  return (
    <div className='cart-item__bar'>
      <div
        className='cart-item__bar--income'
        style={{ width: `${myIncomePercentage.toFixed(2)}%` }}
      >
        <h4 className='header header--small color-green'>
          ${myIncomePercentage.toFixed(2)}%
        </h4>
        <div className='cart-item__bar--income--progress'></div>
      </div>
      <div
        className='cart-item__bar--outcome'
        style={{ width: `${myOutcomePercentage.toFixed(2)}%` }}
      >
        <h4 className='header header--small color-red'>
          ${myOutcomePercentage.toFixed(2)}%
        </h4>
        <div className='cart-item__bar--outcome--progress'></div>
      </div>
      {/* <div
        className='cart-item__bar--others'
        style={{ width: `${myBalancePercentage}%` }}
      >
        <h4 className='header header--small color-gray'>
          ${myBalancePercentage}%
        </h4>
        <div className='cart-item__bar--others--progress'></div>
      </div> */}
    </div>
  );
};

export default CartItemBar;

/**
 * maybe last div will not appear at all
 * i'll test it and see how it performs
 */
