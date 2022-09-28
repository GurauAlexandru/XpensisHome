import CartItemMonthly from '../cart-item-monthly/cart-item-monthly.component';
import CartMonthlyTotal from '../cart-monthly-total/cart-monthly-total.component';

const CartItemMonthlyOutcome = ({
  bills,
  currency,
  totalOutcome,
  otherOutcome,
}) => (
  <CartItemMonthly>
    <div className='cart-item-monthly__box'>
      <h3 className='header h-large header-cart bk-red'>Bills</h3>
      {bills.map((el) => {
        return (
          <div key={el[0]} className='cart-item-monthly__container'>
            <p className='p-cart-item'>{`${
              el[0].charAt(0).toUpperCase() + el[0].slice(1)
            }`}</p>
            <p className='p-cart-item'>{`-${el[1]} ${currency}`}</p>
          </div>
        );
      })}
      <div className='cart-item-monthly__container'>
        <p className='p-cart-item'>Others</p>
        <p className='p-cart-item'>
          -{otherOutcome} {currency}
        </p>
      </div>
    </div>
    <CartMonthlyTotal
      total={totalOutcome}
      symbol={'-'}
      currency={currency}
      type='outcome'
    />
  </CartItemMonthly>
);

export default CartItemMonthlyOutcome;
