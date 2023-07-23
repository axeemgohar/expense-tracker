import Expenses from "./components/expenses/Expenses.component";
import AddExpense from "./components/addexpense/AddExpense.component";
import Card from "./components/UI wrappers/Card.component";
import { useEffect, useState } from "react";
import "./app.css";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getUserInput = (value) => {
    setUserData((prevValue) => {
      return [value, ...prevValue];
    });
  };

  useEffect(() => {
    const getLocalExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (getLocalExpenses) {
      const getLocalStorage = getLocalExpenses.map((element) => {
        return {
          id: element.id,
          date: new Date(element.date),
          amount: Number(element.amount),
          title: element.title,
        };
      });
      setUserData(getLocalStorage);
    }
  }, []);
  const deleteExpense = (value) => {
    const getIndex = userData.findIndex((item) => item.id === value);
    const deleteItem = [...userData];
    deleteItem.splice(getIndex, 1);
    setUserData(deleteItem);
    localStorage.setItem("expenses", JSON.stringify(deleteItem));
  };

  return (
    <>
      <Card
        className="mx-2 mx-sm-5 my-4 position-relative z-2"
        style={{ maxHeight: "70px" }}
      >
        <AddExpense onGetUserInput={getUserInput} />
      </Card>
      <div className="mx-2 mx-sm-5 mb-5 chart-expenses-container">
        <Expenses expenseData={userData} onDeleteGetId={deleteExpense} />
      </div>
    </>
  );
};

export default App;
