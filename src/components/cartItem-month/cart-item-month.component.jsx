import './cart-item-month.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const CartItemMonth = () => {
  const { year, setMonth, accountDetails } = useContext(UserContext);

  const months = accountDetails().allMonths;

  const handleSelectMonth = (e) => {
    setMonth(e.target.value);
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
      <h3 className='header h-cart-huge'>{year}</h3>
    </div>
  );
};

export default CartItemMonth;
