import { useState } from "react";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 54 42.8625"
              x="0px"
              y="0px"
              width={150}
            >
              <defs>
                <style>.cls-1</style>
              </defs>
              <title>Empty Bucket</title>
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <path
                    className="cls-1"
                    fill="#2b2b31"
                    d="M53.44,5.3l.13-.15A2.32,2.32,0,0,0,54,3.41l-.25-1.46A2.34,2.34,0,0,0,51,0L26.69,4.19a2.35,2.35,0,0,0-.38.1H2.59A2.59,2.59,0,0,0,0,6.88V7.7a2.59,2.59,0,0,0,2.59,2.59H4.05L8.87,31.36A4.41,4.41,0,0,0,13,34.29H42c1.66,0,2.72-1.2,3.13-2.94l4.81-21.06h1.47A2.59,2.59,0,0,0,54,7.7V6.88A2.56,2.56,0,0,0,53.44,5.3Zm-50.86,3A.59.59,0,0,1,2,7.7V6.88a.59.59,0,0,1,.59-.59H24.77a2.33,2.33,0,0,0,0,.59L25,8.29H2.59ZM43.19,30.9a1.7,1.7,0,0,1-1.57,1.4H12.38a1.69,1.69,0,0,1-1.57-1.39L6.11,10.29H47.89ZM52,7.7a.59.59,0,0,1-.59.59H39.25L51,6.29h.45a.59.59,0,0,1,.59.59Z"
                  />
                  <path
                    className="cls-1"
                    fill="#2b2b31"
                    d="M27.26,27.29A8.35,8.35,0,0,1,19.2,22a1,1,0,1,0-1.89.66,10.35,10.35,0,0,0,9.94,6.67,10.35,10.35,0,0,0,9.95-6.67A1,1,0,1,0,35.31,22,8.35,8.35,0,0,1,27.26,27.29Z"
                  />
                  <path
                    className="cls-1"
                    fill="#2b2b31"
                    d="M20,19a1,1,0,0,0,1.41,0l1.29-1.29L24,19a1,1,0,0,0,1.41-1.41l-1.29-1.29L25.45,15A1,1,0,0,0,24,13.59l-1.29,1.29-1.29-1.29A1,1,0,0,0,20,15l1.29,1.29L20,17.59A1,1,0,0,0,20,19Z"
                  />
                  <path
                    className="cls-1"
                    fill="#2b2b31"
                    d="M29,19a1,1,0,0,0,1.41,0l1.29-1.29L33,19a1,1,0,0,0,1.41-1.41l-1.29-1.29L34.45,15A1,1,0,0,0,33,13.59l-1.29,1.29-1.29-1.29A1,1,0,0,0,29,15l1.29,1.29L29,17.59A1,1,0,0,0,29,19Z"
                  />
                </g>
              </g>
            </svg>
            <h5>No expense found</h5>
          </div>
        )}
      </Card>
    </>
  );
};

export default Expenses;
