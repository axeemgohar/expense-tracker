import { useState } from "react";
import EmptyBucket from "../../assets/EmptyBucket.svg";
import Card from "../UI wrappers/Card.component";
import ExpenseFilter from "../expensefilter/ExpenseFilter.component";
import ExpenseItem from "../expenseitem/ExpenseItem.component";
import ChartExpenses from "../chart/ChartExpenses.component";
import "./expenses.styles.css";
const Expenses = (props) => {
  const [receivedYear, setRecievedYear] = useState("Year");
  const [recievedOrder, setRecievedOrder] = useState("None");

  let expenseData = [...props.expenseData];

  const parsedYear = (recievedValue) => {
    setRecievedYear(recievedValue);
  };

  if (receivedYear !== "Year") {
    expenseData = expenseData.filter((element) => {
      const year = element.date.getFullYear().toString();

      return receivedYear === year;
    });
  }

  if (receivedYear !== "Year" && expenseData.length === 0) {
    setRecievedYear("Year");
  }
  const parsedOrder = (recievedValue) => {
    setRecievedOrder(recievedValue);
  };
  if (recievedOrder === "high-to-low") {
    expenseData.sort((a, b) => {
      return b.amount - a.amount;
    });
  } else if (recievedOrder === "low-to-high") {
    expenseData.sort((a, b) => {
      return a.amount - b.amount;
    });
  }

  const handleDeleteExpense = (id) => {
    props.onDeleteGetId(id);
  };

  return (
    <>
      <ChartExpenses expenses={expenseData} />
      <Card className="expenses-container ms-5 flex-grow-1">
        {expenseData.length > 0 ? (
          <>
            <ExpenseFilter
              selectedYear={receivedYear}
              expenseYears={props.expenseData}
              onParseYear={parsedYear}
              onParseOrder={parsedOrder}
              selectedOrder={recievedOrder}
            />
            <div className="all-expense-items">
              {expenseData.map((element) => {
                return (
                  <ExpenseItem
                    onDeleteExpense={handleDeleteExpense}
                    key={element.id}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                    id={element.id}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "763.41px" }}
          >
            <img src={EmptyBucket} width={150} alt="Empty Bucket" />
            <h5>No expense found</h5>
          </div>
        )}
      </Card>
    </>
  );
};

export default Expenses;
