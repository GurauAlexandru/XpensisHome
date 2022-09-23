import './cart-item-monthly-income.styles.scss';

const CartItemMonthlyIncome = ({ salary, others, currency }) => (
  <section className='cart-item-monthly'>
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
  </section>
);

export default CartItemMonthlyIncome;
