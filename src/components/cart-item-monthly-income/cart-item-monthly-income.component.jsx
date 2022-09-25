import './cart-item-monthly-income.styles.scss';

const CartItemMonthlyIncome = ({ salary, others, currency, totalIncome }) => (
  <section className='cart-item-monthly'>
    <div className='cart-item-monthly__box'>
      <h3 className='header h-large header-cart bk-green'>Monthly income</h3>
      <div className='cart-item-monthly__container'>
        <p className='p-cart-item'>Salary</p>
        <p className='p-cart-item'>
          +{salary} {currency}
        </p>
      </div>
      <div className='cart-item-monthly__container'>
        <p className='p-cart-item'>Others</p>
        <p className='p-cart-item'>
          +{others} {currency}
        </p>
      </div>
    </div>
    <div className='cart-item-monthly__total'>
      <p className='p-total'>{`Total income:`}</p>
      <p className='p-total'>{`+${totalIncome} ${currency}`}</p>
    </div>
  </section>
);

export default CartItemMonthlyIncome;

/**
 * cart-item-monthly__container -> to it's own component
 * maybe: cart-item-monthly -> to it's own component
 */
