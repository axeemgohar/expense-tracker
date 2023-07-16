import Expenses from "./components/expenses/Expenses.component";
import AddExpense from "./components/addexpense/AddExpense.component";
import Card from "./components/UI wrappers/Card.component";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getUserInput = (value) => {
    setUserData((prevValue) => {
      return [value, ...prevValue];
    });
  };

  const deleteExpense = (value) => {
    const getIndex = userData.findIndex((item) => item.id === value);
    const deleteItem = [...userData];
    deleteItem.splice(getIndex, 1);

    // console.log(deleteItem);
    setUserData(deleteItem);
  };
  console.log(userData);

  return (
    <>
      <Card
        className="mx-5 my-4 position-relative z-2"
        style={{ height: "70px" }}
      >
        <AddExpense onGetUserInput={getUserInput} />
      </Card>
      <div className="mx-5 d-flex mb-5">
        <Expenses expenseData={userData} onDeleteGetId={deleteExpense} />
      </div>
    </>
  );
};

export default App;
