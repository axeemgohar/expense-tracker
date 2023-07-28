import Expenses from "./components/expenses/Expenses.component";
import AddExpense from "./components/addexpense/AddExpense.component";
import Header from "./components/header/Header.component";
import Card from "./components/UI wrappers/Card.component";
import { useEffect, useState } from "react";
import "./app.css";
import Footer from "./components/footer/Footer.component";

const App = () => {
  const [userData, setUserData] = useState([]);

  //Pushing Recieved Data In A State Array
  const getUserInput = (value) => {
    setUserData((prevValue) => {
      return [value, ...prevValue];
    });
  };

  //Retrieving Data From Local Storage And Storing In A State
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

  //Deleting Expense Based On Their Id
  const deleteExpense = (value) => {
    const getIndex = userData.findIndex((item) => item.id === value);
    const deleteItem = [...userData];
    deleteItem.splice(getIndex, 1);
    setUserData(deleteItem);
    localStorage.setItem("expenses", JSON.stringify(deleteItem));
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Card
          className="mx-2 mx-sm-5 my-4 position-relative z-2"
          style={{ maxHeight: "70px" }}
        >
          <AddExpense onGetUserInput={getUserInput} />
        </Card>
        <div className="mx-2 mx-sm-5 mb-5 chart-expenses-container">
          <Expenses expenseData={userData} onDeleteGetId={deleteExpense} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
