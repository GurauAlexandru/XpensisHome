import './cart-item-month.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const CartItemMonth = () => {
  const { setMonth, setYear, accountDetails } = useContext(UserContext);

  const { allMonths, allYears } = accountDetails();

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
          {allMonths
            ? allMonths.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))
            : allMonths[0]}
        </select>
      </h3>
      <h3 className='header h-cart-huge'>
        <select className='year-options' onChange={handleSelectYear}>
          {allYears
            .map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })
            .reverse()}
        </select>
      </h3>
    </div>
  );
};

export default CartItemMonth;
