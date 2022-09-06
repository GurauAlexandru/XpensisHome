import { createContext, useState } from 'react';

import users from '../store/users'; //temp

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

console.log(currentMonth);
/**
 * swith case || useReducer hook // for months
 */

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  year: null,
  setYear: () => {},
  month: '',
  setMonth: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState('august');

  const currentData = currentUser?.year[year][month];

  const salary = currentData.income.salary;
  const otherIncome = currentData.income.others.reduce(
    (cur, acc) => cur + acc,
    0
  );

  const allBills = currentData.outcome.bills;
  const allBillsValues = Object.values(allBills);
  const totalBills = allBillsValues.reduce((cur, acc) => cur + acc, 0);

  const outherOutcome = currentData.outcome.others.reduce(
    (cur, acc) => cur + acc,
    0
  );

  const totalBalance = salary + otherIncome - (totalBills + outherOutcome);

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    setCurrentUser,
    year,
    setYear,
    month,
    setMonth,
    logout,
    salary,
    otherIncome,
    totalBills,
    outherOutcome,
    totalBalance,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
