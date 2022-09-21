import './cart-item-monthly-outcome.styles.scss';

const CartItemMonthlyOutcome = ({ bills, currency }) => (
  <section className='cart-item-monthly-outcome'>
    <h3 className='header h-large header-cart bk-red'>Bills</h3>
    {bills.map((el) => {
      return (
        <p className='p-cart-item' key={el[0]}>{`${
          el[0].charAt(0).toUpperCase() + el[0].slice(1)
        }: ${el[1]} ${currency}`}</p>
      );
    })}
  </section>
);

export default CartItemMonthlyOutcome;
