import './budget.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import Navigation from '../../components/navigation/navigation.component';
import BudgetTotalSavings from '../../components/elements/budget-total-savings/budget-total-savings.component';

const AccountBudget = () => {
  const { currentUser, year, currency } = useContext(UserContext);

  const allData = Object.values(currentUser?.year[year]);

  const yearTotal = allData.map((el) => {
    const { income, outcome } = el;
    const salary = income.salary.reduce((cur, acc) => cur + acc, 0);
    const otherIncome = income.others.reduce((cur, acc) => cur + acc, 0);
    const allIncome = salary + otherIncome;

    const allBills = outcome.bills;
    const allBillsValues = Object.values(allBills);
    const totalBills = allBillsValues.reduce((cur, acc) => cur + acc, 0);
    const otherOutcome = outcome.others.reduce((cur, acc) => cur + acc, 0);
    const totalOutcome = totalBills + otherOutcome;

    const totalBalance = allIncome - totalOutcome;

    return totalBalance;
  });

  const totalSavings = yearTotal.reduce((cur, acc) => cur + acc, 0);

  return (
    <div className='body-container account-budget'>
      <Navigation header='Bugdet' />
      <BudgetTotalSavings
        money={totalSavings.toLocaleString('RO-ro')}
        currency={currency}
        year={year}
      />
    </div>
  );
};

export default AccountBudget;

/**
 * Maybe i'll change this to show saving for all years at once
 * There are some repetitive code [chart and user.context]
 */
