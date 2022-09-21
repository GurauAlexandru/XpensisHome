import './details.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import Bar from '../../components/bar/bar.component';
import SummaryBox from '../../components/summary-box/summary-box.component';
import CartItemMonthlyIncome from '../../components/cart-item-monthly-income/cart-item-monthly-income.component';
import CartItemMonthlyOutcome from '../../components/cart-item-monthly-outcome/cart-item-monthly-outcome.component';
import NoData from '../../components/errors/data/error.data.component';

const AccountDetails = () => {
  const { accountDetails, currency, data, billsArray } =
    useContext(UserContext);

  const { salary, otherIncome, totalBills, outherOutcome, totalBalance } =
    accountDetails();

  return (
    <section className='body-container account-details'>
      <Bar header='Account details' />
      {data === true ? (
        <div className='account-details__container'>
          <div className='account-details__container--main'>
            <CartItemMonthlyIncome currency={currency} />
            <CartItemMonthlyOutcome bills={billsArray} currency={currency} />
          </div>
          <div className='account-details__container--summary'>
            <h3 className='header h-normal'>Summary</h3>
            <SummaryBox
              source='Income'
              title='Salary'
              mainMoney={salary.toLocaleString('RO-ro')}
              subtitle='Other incomes'
              secondMoney={otherIncome.toLocaleString('RO-ro')}
              currency={currency}
              color='color-green'
              headerStyle='h-cart-big'
            />
            <SummaryBox
              source='Outcome'
              title='Bills'
              mainMoney={totalBills.toLocaleString('RO-ro')}
              subtitle='Other outcomes'
              secondMoney={outherOutcome.toLocaleString('RO-ro')}
              currency={currency}
              headerStyle='h-cart-big'
            />
            <SummaryBox
              source='Total balance'
              mainMoney={totalBalance.toLocaleString('RO-ro')}
              currency={currency}
              secondColor='color-gray'
              headerStyle='h-large'
            />
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default AccountDetails;
