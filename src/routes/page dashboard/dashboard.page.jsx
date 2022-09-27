import './dashboard.styles.scss';

import Bar from '../../components/bar/bar.component';
import CartItem from '../../components/cart-item/cart-item.component';
import CartItemContainer from '../../components/cart-item-container/cart-item-container.component';
import CartItemBar from '../../components/cart/cart-status-bar/cart-status-bar.component';
import CartItemBalance from '../../components/cart-item-balance/cart-item-balance.component';
import CartItemNoData from '../../components/cart-item-no-data/cart-item-no-data.component';

import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user.context';

const Dashboard = () => {
  const { accountDetails, currency, data, currentUser, year, month, setData } =
    useContext(UserContext);

  const { salary, otherIncome, totalBills, otherOutcome } = accountDetails();

  const bills = currentUser?.year[year][month].outcome.bills;
  const billsName = Object.keys(bills);

  useEffect(() => {
    if (billsName.length === 0) setData(false);
    if (billsName.length > 0) setData(true);
  }, [month, year, billsName, setData]);

  return (
    <div className='body-container overview'>
      <Bar header='Dashboard' />

      <div className='body-box'>
        {data === true ? (
          <CartItem
            title='Account details'
            balance={
              <CartItemBalance totalBalance='22.500,00' currency={currency} />
            }
            children={
              <CartItemContainer
                salary={salary ? salary.toLocaleString('RO-ro') : '0'}
                otherIncome={
                  otherIncome ? otherIncome.toLocaleString('RO-ro') : '0'
                }
                bills={totalBills ? totalBills.toLocaleString('RO-ro') : '0'}
                otherOutcome={
                  otherOutcome ? otherOutcome.toLocaleString('RO-ro') : '0'
                }
                currency={currency}
              />
            }
            bar={<CartItemBar />}
          />
        ) : (
          <CartItemNoData />
        )}
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default Dashboard;
