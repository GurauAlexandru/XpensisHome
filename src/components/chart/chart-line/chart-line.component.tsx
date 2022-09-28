import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useContext } from 'react';
import { UserContext } from '../../../context/user.context';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ChartLine = () => {
  const { currentUser, year } = useContext(UserContext);

  //@ts-ignore
  const currentMonth = currentUser?.year[year];
  const allMonths = Object.keys(currentMonth);

  //@ts-ignore
  const allData = Object.values(currentUser?.year[year]);

  const yearTotal = allData.map((el) => {
    //@ts-ignore
    const { income, outcome } = el;
    const salary = income.salary.reduce((cur, acc) => cur + acc, 0);
    const otherIncome = income.others.reduce((cur, acc) => cur + acc, 0);
    const allIncome = salary + otherIncome;

    const allBills = outcome.bills;
    const allBillsValues = Object.values(allBills);
    //@ts-ignore
    const totalBills = allBillsValues.reduce((cur, acc) => cur + acc, 0);
    const otherOutcome = outcome.others.reduce((cur, acc) => cur + acc, 0);
    const totalOutcome = totalBills + otherOutcome;

    const totalBalance = allIncome - totalOutcome;

    return totalBalance;
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: true,
        text: 'Savings',
      },
    },
  };

  const labels = allMonths;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'last 5 years',
        data: yearTotal,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default ChartLine;
