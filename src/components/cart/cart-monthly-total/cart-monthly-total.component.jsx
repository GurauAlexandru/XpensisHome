import './cart-monthly-total.styles.scss';

const CartMonthlyTotal = ({ type, total, symbol }) => (
  <div className='cart-monthly-total'>
    <p className='p-total'>{`Total ${type}:`}</p>
    <p className='p-total'>{`${symbol}${total}`}</p>
  </div>
);

export default CartMonthlyTotal;
