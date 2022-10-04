import { createContext, useState } from 'react';

// import users from '../store/users'; //temp

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
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const UserProvider = ({ children }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = 'august';

  // const [currentUser, setCurrentUser] = useState(() => users[0]);
  const [currentUser, setCurrentUser] = useState(() => null);
  const [year, setYear] = useState(() => currentYear);
  const [month, setMonth] = useState(() => currentMonth);
  const [currency, setCurrency] = useState(() => '€');
  const [data, setData] = useState(() => true);
  const [isModalOpen, setIsModalOpen] = useState(() => false);

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
    const otherOutcome = currentData?.outcome.others.reduce(
      (cur, acc) => cur + acc,
      0
    );
    const totalIncome = salary + otherIncome;
    const totalOutcome = totalBills + otherOutcome;
    const totalBalance = totalIncome - totalOutcome;
    const totalMoney = totalIncome + totalOutcome;

    const myIncomePercentage = (totalIncome * 100) / totalMoney;
    const myOutcomePercentage = (totalOutcome * 100) / totalMoney;

    return {
      salary,
      otherIncome,
      totalIncome,
      totalBills,
      otherOutcome,
      totalBalance,
      totalOutcome,
      allMonths,
      allYears,
      myIncomePercentage,
      myOutcomePercentage,
    };
  };

  const logout = () => {
    setIsModalOpen(false);
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
    isModalOpen,
    setIsModalOpen,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
