import './details.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import Bar from '../../components/bar/bar.component';

/**
 * CartItemMonth component have to be moved away from pages to the navigation
 * This way user will have to selet once
 * Second benefit is that, user is no longer confused by displayed month or year
 */

const AccountDetails = () => {
  const { accountDetails } = useContext(UserContext);

  const { salary, otherIncome, totalBills, outherOutcome } = accountDetails();

  return (
    <section className='body-container account-details'>
      <Bar header='Account details' />
      <div className='account-details__container'>
        <div className='account-details__container--main'></div>
        <div className='account-details__container--summary'>
          <h3 className='header h-normal'>Summary</h3>

          <div className='account-details__container--summary--box'>
            <h3 className='header h-cart-big'>Income</h3>
            <h3 className='header h-small'>Salary</h3>
            <h2 className='header h-normal color-green'>{salary} RON</h2>
            <h3 className='header h-small'>Other incomes</h3>
            <h2 className='header h-normal'>{otherIncome} RON</h2>
          </div>
          <div className='account-details__container--summary--box'>
            <h3 className='header h-cart-big'>Outcome</h3>
            <h3 className='header h-small'>Bills</h3>
            <h2 className='header h-normal'>{totalBills} RON</h2>
            <h3 className='header h-small'>Other Outcomes</h3>
            <h2 className='header h-normal'>{outherOutcome} RON</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
