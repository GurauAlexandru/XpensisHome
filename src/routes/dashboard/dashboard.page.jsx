import './dashboard.styles.scss';

import Navigation from '../../components/navigation/navigation.component';
import CartItem from '../../components/cart/cart-item/cart-item.component';
import CartContainer from '../../components/cart/cart-container/cart-container.component';
import CartStatusBar from '../../components/cart/cart-status-bar/cart-status-bar.component';
import CartBalance from '../../components/cart/cart-balance/cart-balance.component';
import CartNoData from '../../components/errors/cart-no-data/cart-no-data.component';

import ChartBudgetpreview from '../../components/chart/chart-budget-preview/chart-budget-preview.component';

import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user.context';

const Dashboard = () => {
  const {
    accountDetails,
    data,
    currentUser,
    year,
    month,
    setData,
    myLocaleOption,
    locale,
  } = useContext(UserContext);

  const { salary, otherIncome, totalBills, otherOutcome } = accountDetails();

  const bills = currentUser?.year[year][month].outcome.bills;
  const billsName = Object.keys(bills);

  useEffect(() => {
    if (billsName.length === 0) setData(false);
    if (billsName.length > 0) setData(true);
  }, [month, year, billsName, setData]);

  return (
    <div className='body-container overview'>
      <Navigation header='Dashboard' />

      <div className='body-box'>
        {data === true ? (
          <CartItem
            title='Account details'
            balance={<CartBalance />}
            children={
              <CartContainer
                salary={
                  salary
                    ? salary.toLocaleString(`${locale}`, myLocaleOption)
                    : '0'
                }
                otherIncome={
                  otherIncome
                    ? otherIncome.toLocaleString(`${locale}`, myLocaleOption)
                    : '0'
                }
                bills={
                  totalBills
                    ? totalBills.toLocaleString(`${locale}`, myLocaleOption)
                    : '0'
                }
                otherOutcome={
                  otherOutcome
                    ? otherOutcome.toLocaleString(`${locale}`, myLocaleOption)
                    : '0'
                }
              />
            }
            bar={<CartStatusBar />}
          />
        ) : (
          <CartNoData />
        )}
        <CartItem title='Budget' children={<ChartBudgetpreview />} />
      </div>
    </div>
  );
};

export default Dashboard;
