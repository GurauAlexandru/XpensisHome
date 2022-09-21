import './details.styles.scss';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user.context';

import Bar from '../../components/bar/bar.component';
import SummaryBox from '../../components/summary-box/summary-box.component';
import NoData from '../../components/errors/data/error.data.component';

const AccountDetails = () => {
  const [data, setData] = useState(true);
  const { accountDetails, currentUser, year, month } = useContext(UserContext);

  const { salary, otherIncome, totalBills, outherOutcome, totalBalance } =
    accountDetails();

  const bills = currentUser?.year[year][month].outcome.bills;
  const billsName = Object.keys(bills);

  useEffect(() => {
    if (billsName.length === 0) setData(false);
    if (billsName.length > 0) setData(true);
  }, [month, year, billsName]);

  return (
    <section className='body-container account-details'>
      <Bar header='Account details' />
      {data === true ? (
        <div className='account-details__container'>
          <div className='account-details__container--main'>
            <h3 className='header h-large'>Monthly bills</h3>
          </div>
          <div className='account-details__container--summary'>
            <h3 className='header h-normal'>Summary</h3>
            <SummaryBox
              source='Income'
              title='Salary'
              mainMoney={salary.toLocaleString('RO-ro')}
              subtitle='Other incomes'
              secondMoney={otherIncome.toLocaleString('RO-ro')}
              currency='RON'
              color='color-green'
              headerStyle='h-cart-big'
            />
            <SummaryBox
              source='Outcome'
              title='Bills'
              mainMoney={totalBills.toLocaleString('RO-ro')}
              subtitle='Other outcomes'
              secondMoney={outherOutcome.toLocaleString('RO-ro')}
              currency='RON'
              headerStyle='h-cart-big'
            />
            <SummaryBox
              source='Total balance'
              mainMoney={totalBalance.toLocaleString('RO-ro')}
              currency='RON'
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
