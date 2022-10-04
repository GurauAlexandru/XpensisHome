import './select-time.styles.scss';

import { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/user.context';

const SelectTime = () => {
  const { setMonth, setYear, accountDetails, month, year } =
    useContext(UserContext);

  const { allMonths, allYears } = accountDetails();

  useEffect(() => {
    const monthIndex = allMonths.findIndex((el) => el === month);
    const selectMonth = document.querySelector('.month-options');
    selectMonth.querySelectorAll('option')[monthIndex].selected = 'selected';
  }, [month, allMonths]);

  useEffect(() => {
    const yearIndex = allYears.findIndex((el) => el === year.toString());
    const selectYear = document.querySelector('.year-options');
    selectYear.querySelectorAll('option')[yearIndex].selected = 'selected';
  }, [year, allYears]);

  const handleSelectMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleSelectYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className='select-time'>
      <h3 className='header h-small'>
        <select className='month-options' onChange={handleSelectMonth}>
          {allMonths.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </h3>
      <h3 className='header h-small'>
        <select className='year-options' onChange={handleSelectYear}>
          {allYears.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </h3>
    </div>
  );
};

export default SelectTime;
