import './details.styles.scss';

import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user.context';

import Navigation from '../../components/navigation/navigation.component';
import CartItemMonthlyIncome from '../../components/cart/cart-item-monthly-income/cart-item-monthly-income.component';
import CartItemMonthlyOutcome from '../../components/cart/cart-item-monthly-outcome/cart-item-monthly-outcome.component';
import NoData from '../../components/errors/data/error.data.component';

const AccountDetails = () => {
  const {
    accountDetails,
    currentUser,
    year,
    month,
    data,
    setData,
    myLocaleOption,
    locale,
  } = useContext(UserContext);

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
      <Navigation header='Account details' />

      {data === true ? (
        <>
          <div className='account-details__container'>
            <div className='account-details__container--main'>
              <CartItemMonthlyIncome
                salary={salary.toLocaleString(`${locale}`, myLocaleOption)}
                others={otherIncome.toLocaleString(`${locale}`, myLocaleOption)}
                totalIncome={totalIncome.toLocaleString(
                  `${locale}`,
                  myLocaleOption
                )}
              />
              <CartItemMonthlyOutcome
                bills={billsArray}
                otherOutcome={otherOutcome.toLocaleString(
                  `${locale}`,
                  myLocaleOption
                )}
                totalOutcome={totalOutcome.toLocaleString(
                  `${locale}`,
                  myLocaleOption
                )}
              />
            </div>
          </div>
        </>
      ) : (
        <NoData />
      )}

      <div className='account-details__total'>
        <h2 className='header h-large color-primary80'>Total money left:</h2>
        <h2 className='header h-large color-primary80'>{` ${totalBalance.toLocaleString(
          `${locale}`,
          myLocaleOption
        )} `}</h2>
      </div>
    </section>
  );
};

export default AccountDetails;
