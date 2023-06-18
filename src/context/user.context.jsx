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
  setIsModalOpen: () => {}
});

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(() => users[0]);
  // console.log(currentUser.year);

  const currentYear = 2022; //maybe i'll make this dinamic
  const currentMonth = 'august';

  const [currentUser, setCurrentUser] = useState(() => null);
  const [year, setYear] = useState(() => currentYear);
  const [month, setMonth] = useState(() => currentMonth);
  const [currency, setCurrency] = useState(() => 'EUR');
  const [data, setData] = useState(() => true);
  const [isModalOpen, setIsModalOpen] = useState(() => false);

  const RON = 4.94;
  const USD = 0.98;

  let locale = 'it-IT';
  const myLocaleOption = {
    style: 'currency',
    currency: currency
  };

  if (currency === 'USD') locale = 'en-US';
  if (currency === 'RON') locale = 'ro-RO';

  const accountDetails = () => {
    const curYear = currentUser.year;
    const allYears = Object.keys(curYear);

    const currentMonth = currentUser?.year[year];
    const allMonths = Object.keys(currentMonth);

    const currentData = currentUser?.year[year][month];

    let salary = currentData?.income.salary.reduce((cur, acc) => cur + acc, 0);
    if (currency === 'RON') salary = salary * RON;
    if (currency === 'USD') salary = salary * USD;

    let otherIncome = currentData?.income.others.reduce(
      (cur, acc) => cur + acc,
      0
    );
    if (currency === 'RON') otherIncome = otherIncome * RON;
    if (currency === 'USD') otherIncome = otherIncome * USD;

    const allBills = currentData?.outcome.bills;
    const allBillsValues = Object.values(allBills);
    let totalBills = allBillsValues.reduce((cur, acc) => cur + acc, 0);
    if (currency === 'RON') totalBills = totalBills * RON;
    if (currency === 'USD') totalBills = totalBills * USD;
    let otherOutcome = currentData?.outcome.others.reduce(
      (cur, acc) => cur + acc,
      0
    );
    if (currency === 'RON') otherOutcome = otherOutcome * RON;
    if (currency === 'USD') otherOutcome = otherOutcome * USD;
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
      myOutcomePercentage
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
    RON,
    USD,
    myLocaleOption,
    locale
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
