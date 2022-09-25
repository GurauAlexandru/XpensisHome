import './details.styles.scss';

import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user.context';

import Bar from '../../components/bar/bar.component';

import CartItemMonthlyIncome from '../../components/cart-item-monthly-income/cart-item-monthly-income.component';
import CartItemMonthlyOutcome from '../../components/cart-item-monthly-outcome/cart-item-monthly-outcome.component';
import NoData from '../../components/errors/data/error.data.component';

const AccountDetails = () => {
  const { accountDetails, currentUser, year, month, currency, data, setData } =
    useContext(UserContext);

  const {
    salary,
    otherIncome,
    totalBalance,
    totalOutcome,
    totalIncome,
    otherOutcome,
  } = accountDetails();

  const bills = currentUser?.year[year][month].outcome.bills;
  const billsName = Object.keys(bills);
  const billsArray = Object.entries(bills);

  useEffect(() => {
    if (billsName.length === 0) setData(false);
    if (billsName.length > 0) setData(true);
  }, [month, year, billsName, setData]);

  return (
    <section className='body-container account-details'>
      <Bar header='Account details' />
      {data === true ? (
        <>
          <div className='account-details__container'>
            <div className='account-details__container--main'>
              <CartItemMonthlyIncome
                salary={salary}
                others={otherIncome}
                totalIncome={totalIncome}
                currency={currency}
              />
              <CartItemMonthlyOutcome
                bills={billsArray}
                currency={currency}
                otherOutcome={otherOutcome}
                totalOutcome={totalOutcome}
              />
            </div>
          </div>
          <div className='account-details__total'>
            <h2 className='header h-large color-primary80'>
              Total money left:
            </h2>
            <h2 className='header h-large color-primary80'>{` ${totalBalance} ${currency}`}</h2>
          </div>
        </>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default AccountDetails;
