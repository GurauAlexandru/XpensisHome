import './cart-item-container.styles.scss';
import { Fragment } from 'react';

const CartItemContainer = ({
  salary,
  otherIncome,
  bills,
  otherOutcome,
  currency,
}) => (
  <Fragment>
    <div className='cart-item__container'>
      <div className='cart-item__container--money'>
        <h3 className='header h-cart-normal'>Salary</h3>
        <h2 className='header h-small color-green'>
          {salary} {currency}
        </h2>
      </div>
      <div className='cart-item__container--others'>
        <h3 className='header h-cart-normal'>Other income</h3>
        <h2 className='header h-small'>
          {otherIncome} {currency}
        </h2>
      </div>
    </div>
    <div className='cart-item__container'>
      <div className='cart-item__container--bills'>
        <h3 className='header h-cart-normal'>Bills</h3>
        <h2 className='header h-small'>
          {bills} {currency}
        </h2>
      </div>
      <div className='cart-item__container--others'>
        <h3 className='header h-cart-normal'>Other outcome</h3>
        <h2 className='header h-small'>
          {otherOutcome} {currency}
        </h2>
      </div>
    </div>
  </Fragment>
);

export default CartItemContainer;
