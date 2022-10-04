import './budget.styles.scss';

import { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';

import Icon from '../../components/icon/icon.component';
import dataPlus from '../../assets/icons/data-plus.svg';

import Navigation from '../../components/navigation/navigation.component';
import BudgetTotalSavings from '../../components/elements/budget-total-savings/budget-total-savings.component';
import Button from '../../components/button/button.component';

import ModalAddData from '../../components/modal-add-data/modal-add-data.component';
import { useEffect } from 'react';

const AccountBudget = () => {
  const { currentUser, currency } = useContext(UserContext);

  const [addData, setAddData] = useState(false);

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

  // Add data
  const openModalAddData = () => setAddData(true);
  const closeModalData = () => setAddData(false);

  useEffect(() => {
    return document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModalData();
      }
    });
  }, [addData, setAddData]);

  return addData ? (
    <ModalAddData
      closeModal={
        <Button
          className='button button__cancel'
          onClick={() => closeModalData()}
        >
          Close modal
        </Button>
      }
    />
  ) : (
    <main className='body-container account-budget'>
      <Navigation header='Bugdet' />
      <BudgetTotalSavings
        money={totalSavings.toLocaleString('RO-ro')}
        currency={currency}
      />
      <section className='budget-container'>
        <h3 className='header h-cart-big'>Here are some things tou can do</h3>
        <div className='budget-actions'>
          <Button
            className='button button__cart button__cart--light-yellow'
            onClick={() => openModalAddData()}
          >
            <Icon src={dataPlus} alt='add data' />
            <h2 className='header h-normal mt-small'>Add data</h2>
            <p className='p-cart-action'>
              In order to keep track with your expensis you should add data each
              month.
            </p>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AccountBudget;
