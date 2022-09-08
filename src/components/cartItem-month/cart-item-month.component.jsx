import './cart-item-month.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const CartItemMonth = () => {
  const { setMonth, setYear, accountDetails } = useContext(UserContext);

  const months = accountDetails().allMonths;
  const years = accountDetails().allYears;

  if (!months || !years) return;

  const handleSelectMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleSelectYear = (e) => {
    setYear(e.target.value);
    console.log(months);
  };

  return (
    <div className='cart-item__month'>
      <h3 className='header h-small'>
        <select className='month-options' onChange={handleSelectMonth}>
          {months.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </h3>
      <h3 className='header h-cart-huge'>
        <select className='year-options' onChange={handleSelectYear}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </h3>
    </div>
  );
};

export default CartItemMonth;

/**
 * fixing auto select current year
 * fixing missing months || when select a year change to first month in array
 */
