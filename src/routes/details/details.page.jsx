import './details.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import Bar from '../../components/bar/bar.component';
import SummaryBox from '../../components/summary-box/summary-box.component';

const AccountDetails = () => {
  const { accountDetails } = useContext(UserContext);

  const { salary, otherIncome, totalBills, outherOutcome, totalBalance } =
    accountDetails();

  return (
    <section className='body-container account-details'>
      <Bar header='Account details' />
      <div className='account-details__container'>
        <div className='account-details__container--main'></div>
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
    </section>
  );
};

export default AccountDetails;
