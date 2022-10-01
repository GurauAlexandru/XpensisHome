import './budget.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import Navigation from '../../components/navigation/navigation.component';
import BudgetTotalSavings from '../../components/elements/budget-total-savings/budget-total-savings.component';

const AccountBudget = () => {
  const { currentUser, currency } = useContext(UserContext);

  const allYears = Object.keys(currentUser?.year);

  const allTime = allYears.map((el) => {
    const allData = Object.values(currentUser?.year[el]);

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

    return yearTotal.reduce((cur, acc) => cur + acc, 0);
  });
  const totalSavings = allTime.reduce((cur, acc) => cur + acc, 0);

  return (
    <main className='body-container account-budget'>
      <Navigation header='Bugdet' />
      <BudgetTotalSavings
        money={totalSavings.toLocaleString('RO-ro')}
        currency={currency}
      />
      <section className='budget-container'>
        <h3 className='header h-cart-big'>Here are some things tou can do</h3>
        <div className='budget-actions'>
          <div className='cart-action'>1</div>
          <div className='cart-action'>2</div>
          <div className='cart-action'>3</div>
        </div>
      </section>
    </main>
  );
};

export default AccountBudget;
