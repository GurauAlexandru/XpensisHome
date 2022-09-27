import './cart-monthly-total.styles.scss';

const CartMonthlyTotal = ({ type, total, symbol, currency }) => (
  <div className='cart-monthly-total'>
    <p className='p-total'>{`Total ${type}:`}</p>
    <p className='p-total'>{`${symbol}${total} ${currency}`}</p>
  </div>
);

export default CartMonthlyTotal;
