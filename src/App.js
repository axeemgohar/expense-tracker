import Expenses from "./components/expenses/Expenses.component";
import AddExpense from "./components/addexpense/AddExpense.component";
import Card from "./components/UI wrappers/Card.component";
import { useState } from "react";

const expense = [
  {
    id: 1,
    title: "House Rent",
    date: new Date(2022, 10, 5),
    amount: 200,
  },
  {
    id: 2,
    title: "Car Wash",
    date: new Date(2021, 11, 3),
    amount: 30,
  },
  {
    id: 3,
    title: "Grocery",
    date: new Date(2020, 8, 4),
    amount: 50,
  },
  {
    id: 4,
    title: "Utility Bills",
    date: new Date(2022, 7, 6),
    amount: 100,
  },
];
const App = () => {
  const [userData, setUserData] = useState(expense);

  const getUserInput = (value) => {
    setUserData((prevValue) => {
      return [value, ...prevValue];
    });
  };
  console.log(userData);

  return (
    <>
      <Card className="mx-5 my-4 position-relative z-2">
        <AddExpense onGetUserInput={getUserInput} />
      </Card>
      <div className="mx-5 d-flex">
        <Expenses expenseData={userData} setFilteredData={setUserData} />
      </div>
    </>
  );
};

export default App;
