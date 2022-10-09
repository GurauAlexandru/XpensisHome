import CartItemMonthly from '../cart-item-monthly/cart-item-monthly.component';
import CartMonthlyTotal from '../cart-monthly-total/cart-monthly-total.component';
import { UserContext } from '../../../context/user.context';
import { useContext } from 'react';

const CartItemMonthlyOutcome = ({ bills, totalOutcome, otherOutcome }) => {
  const { locale, myLocaleOption, USD, RON, currency } =
    useContext(UserContext);

  return (
    <CartItemMonthly>
      <div className='cart-item-monthly__box'>
        <h3 className='header h-large header-cart bk-red'>Bills</h3>
        {bills.map((el) => {
          let [key, value] = el;
          if (currency === 'RON') value = value * RON;
          if (currency === 'USD') value = value * USD;
          return (
            <div key={key} className='cart-item-monthly__container'>
              <p className='p-cart-item'>{`${
                key.charAt(0).toUpperCase() + key.slice(1)
              }`}</p>
              <p className='p-cart-item'>{`-${value.toLocaleString(
                `${locale}`,
                myLocaleOption
              )}`}</p>
            </div>
          );
        })}
        <div className='cart-item-monthly__container'>
          <p className='p-cart-item'>Others</p>
          <p className='p-cart-item'>-{otherOutcome}</p>
        </div>
      </div>
      <CartMonthlyTotal total={totalOutcome} symbol={'-'} type='outcome' />
    </CartItemMonthly>
  );
};

export default CartItemMonthlyOutcome;
