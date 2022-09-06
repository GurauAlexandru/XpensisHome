import './overview.styles.scss';

import Bar from '../../components/bar/bar.component';
import CartItem from '../../components/cartItem/cart-item.component';
import CartItemContainer from '../../components/cartItem-container/cart-item-container.component';
import CartItemMonth from '../../components/cartItem-month/cart-item-month.component';
import CartItemBar from '../../components/cartItem-bar/cart-item-bar.component';
import CartItemBalance from '../../components/cartItem-balance/cart-item-balance.component';

const Overview = () => {
  return (
    <div className='body-container overview'>
      <Bar header='Overview' />

      <div className='body-box'>
        <CartItem
          title='Account details'
          month={<CartItemMonth />}
          balance={<CartItemBalance totalBalance='22.500,00' currency='RON' />}
          children={
            <CartItemContainer
              salary='10.500,00'
              otherIncome='0'
              bills='3.000,00'
              otherOutcome='50,00'
              currency='RON'
            />
          }
          bar={<CartItemBar />}
        />
        <CartItem />
      </div>
    </div>
  );
};

export default Overview;
