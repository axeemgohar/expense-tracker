import ChartGraph from "./ChartGraph.component";

const ChartExpenses = (props) => {
  const chartData = [
    {
      label: "January",
      wholeMonthExpense: 0,
    },
    {
      label: "February",
      wholeMonthExpense: 0,
    },
    {
      label: "March",
      wholeMonthExpense: 0,
    },
    {
      label: "April",
      wholeMonthExpense: 0,
    },
    {
      label: "May",
      wholeMonthExpense: 0,
    },
    {
      label: "June",
      wholeMonthExpense: 0,
    },
    {
      label: "July",
      wholeMonthExpense: 0,
    },
    {
      label: "August",
      wholeMonthExpense: 0,
    },
    {
      label: "September",
      wholeMonthExpense: 0,
    },
    {
      label: "October",
      wholeMonthExpense: 0,
    },
    {
      label: "November",
      wholeMonthExpense: 0,
    },
    {
      label: "December",
      wholeMonthExpense: 0,
    },
  ];

  for (const expense of props.expenses) {
    const getMonth = expense.date.getMonth();
    chartData[getMonth].wholeMonthExpense += expense.amount;
  }

  return <ChartGraph chartData={chartData} />;
};

export default ChartExpenses;
