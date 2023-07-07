import { useState } from "react";
import Card from "../UI wrappers/Card.component";
import ExpenseFilter from "../expensefilter/ExpenseFilter.component";
import ExpenseItem from "../expenseitem/ExpenseItem.component";
import ChartExpenses from "../chart/ChartExpenses.component";
import "./expenses.styles.css";
const Expenses = (props) => {
  const [receivedYear, setRecievedYear] = useState("Year");

  const parsedYear = (recievedValue) => {
    setRecievedYear(recievedValue);
  };
  const storeVal = props.expenseData.filter((element) => {
    const year = element.date.getFullYear().toString();

    return receivedYear === year;
  });
  console.log(storeVal.length);

  return (
    <>
      <ChartExpenses
        expenses={storeVal.length === 0 ? props.expenseData : storeVal}
      />
      <Card className="expenses-container ms-5 flex-grow-1 p-3">
        <ExpenseFilter
          selectedYear={receivedYear}
          expenseYears={props.expenseData}
          onParseYear={parsedYear}
        />

        {storeVal.length === 0
          ? props.expenseData.map((element) => {
              return (
                <ExpenseItem
                  key={element.id}
                  title={element.title}
                  amount={element.amount}
                  date={element.date}
                />
              );
            })
          : storeVal.map((element) => {
              return (
                <ExpenseItem
                  key={element.id}
                  title={element.title}
                  amount={element.amount}
                  date={element.date}
                />
              );
            })}
      </Card>
    </>
  );
};

export default Expenses;
