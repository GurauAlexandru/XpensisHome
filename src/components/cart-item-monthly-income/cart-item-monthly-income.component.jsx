import './cart-item-monthly-income.styles.scss';

const CartItemMonthlyIncome = ({ currency }) => (
  <section className='cart-item-monthly-income'>
    <h3 className='header h-large header-cart bk-green'>Monthly income</h3>
    <p className='p-cart-item'>{`Salary: 1000 ${currency}`}</p>
    <p className='p-cart-item'>{`Others: 1000 ${currency}`}</p>
  </section>
);

export default CartItemMonthlyIncome;
