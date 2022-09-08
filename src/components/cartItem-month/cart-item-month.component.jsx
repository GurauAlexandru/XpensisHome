import './cart-item-month.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const CartItemMonth = () => {
  const { setMonth, setYear, accountDetails } = useContext(UserContext);

  const months = accountDetails().allMonths;

  const handleSelectMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleSelectYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className='cart-item__month'>
      <h3 className='header h-small'>
        <select className='month-options' onChange={handleSelectMonth}>
          {months
            ? months.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))
            : 'august'}
        </select>
      </h3>
      <h3 className='header h-cart-huge'>
        <select className='year-options' onChange={handleSelectYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </h3>
    </div>
  );
};

export default CartItemMonth;

/**
 * fixing auto select current year
 * fixing missing months || when select a year change to first month in array
 * one fix can be to create an outside const who can keep default satus and when month or year is changed call default status
 */
