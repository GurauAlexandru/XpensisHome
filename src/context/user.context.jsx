import { createContext, useState } from 'react';

// import users from '../store/users'; //temp

const currentYear = new Date().getFullYear();

/**
 * swith case || useReducer hook // for months
 */

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  year: '',
  setYear: () => {},
  month: '',
  setMonth: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState('august');

  const accountDetails = () => {
    const currentData = currentUser?.year[year][month];
    const salary = currentData?.income.salary;
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
    const totalBalance = salary + otherIncome - (totalBills + outherOutcome);

    const currentMonth = currentUser?.year[year];
    const allMonths = Object.keys(currentMonth);

    const currentYear = currentUser.year;
    const allYears = Object.keys(currentYear);

    return {
      salary,
      otherIncome,
      totalBills,
      outherOutcome,
      totalBalance,
      allMonths,
      allYears,
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
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
