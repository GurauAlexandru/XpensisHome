import { createContext, useState, useEffect } from 'react';

import users from '../store/users'; //temp

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  year: '',
  setYear: () => {},
  month: '',
  setMonth: () => {},
  currency: '',
  setCurrency: () => {},
  data: true,
  setData: () => {},
});

export const UserProvider = ({ children }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = 'august';

  const [currentUser, setCurrentUser] = useState(users[0]);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [currency, setCurrency] = useState('€');
  const [data, setData] = useState(true);

  const bills = currentUser?.year[year][month].outcome.bills;
  const billsName = Object.keys(bills);
  const billsArray = Object.entries(bills);

  useEffect(() => {
    if (billsName.length === 0) setData(false);
    if (billsName.length > 0) setData(true);
  }, [month, year, billsName]);

  const accountDetails = () => {
    const curYear = currentUser.year;
    const allYears = Object.keys(curYear);

    const currentMonth = currentUser?.year[year];
    const allMonths = Object.keys(currentMonth);

    const currentData = currentUser?.year[year][month];
    const salary = currentData?.income.salary.reduce(
      (cur, acc) => cur + acc,
      0
    );
    const otherIncome = currentData?.income.others.reduce(
      (cur, acc) => cur + acc,
      0
    );
    const allBills = currentData?.outcome.bills;
    const allBillsValues = Object.values(allBills);
    const totalBills = allBillsValues.reduce((cur, acc) => cur + acc, 0);
    const outherOutcome = currentData?.outcome.others.reduce(
      (cur, acc) => cur + acc,
      0
    );
    const totalIncome = salary + otherIncome;
    const totalOutcome = totalBills + outherOutcome;
    const totalBalance = totalIncome - totalOutcome;
    const totalMoney = totalIncome + totalOutcome;

    const myIncomePercentage = (totalIncome * 100) / totalMoney;
    const myOutcomePercentage = (totalOutcome * 100) / totalMoney;

    return {
      salary,
      otherIncome,
      totalBills,
      outherOutcome,
      totalBalance,
      allMonths,
      allYears,
      myIncomePercentage,
      myOutcomePercentage,
    };
  };

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
    accountDetails,
    currentYear,
    currentMonth,
    currency,
    setCurrency,
    data,
    setData,
    billsArray,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
