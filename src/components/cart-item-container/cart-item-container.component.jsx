import './cart-item-container.styles.scss';
import { Fragment } from 'react';

import CartElement from '../cart/cart-element/cart-element.component';

const CartItemContainer = ({
  salary,
  otherIncome,
  bills,
  otherOutcome,
  currency,
}) => (
  <Fragment>
    <div className='cart-item__container'>
      <CartElement
        title='Salary'
        currency={currency}
        money={salary}
        color='color-green'
      />
      <CartElement
        className='cart-element'
        title='Other income'
        currency={currency}
        money={otherIncome}
      />
    </div>
    <div className='cart-item__container'>
      <CartElement title='Bills' currency={currency} money={bills} />
      <CartElement
        className='cart-element'
        title='Other outcome'
        currency={currency}
        money={otherOutcome}
      />
    </div>
  </Fragment>
);

export default CartItemContainer;
