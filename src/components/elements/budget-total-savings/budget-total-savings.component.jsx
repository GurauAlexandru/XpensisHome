import './budget-total-savings.styles.scss';

const BudgetTotalSavings = ({ money }) => (
  <div className='budget-total-savings'>
    <h3 className='header h-cart-big'>Your savings</h3>
    <h1 className='header h-big'>{money}</h1>
  </div>
);

export default BudgetTotalSavings;
