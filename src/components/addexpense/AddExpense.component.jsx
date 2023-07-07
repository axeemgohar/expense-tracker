import { TextField, styled } from "@mui/material";
import "./addexpense.styles.css";
import { useState } from "react";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#404BDD",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "",
    },
    "&:hover fieldset": {
      borderColor: "#C4C4C4",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#404BDD",
    },
  },
});
const AddExpense = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [showInputs, setShowInputs] = useState({
    showInput: true,
  });

  const userInputHandler = (event) => {
    const { name } = event.target;
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [name]: event.target.value,
      };
    });
  };

  const addExpense = (event) => {
    event.preventDefault();

    props.onGetUserInput({
      id: Math.random(),
      date: new Date(userInput.date),
      amount: Number(userInput.amount),
    });
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  const showAddExpenseInputsHandler = () => {
    setShowInputs({
      showInput: false,
    });
  };

  const cancelAddExpenseHandler = () => {
    setShowInputs({
      showInput: true,
    });
  };

  return (
    <div
      className="add-expense-form-container d-flex flex-column justify-content-center"
      style={{
        height: `${showInputs.showInput === true ? "70px" : "335px"}`,
      }}
    >
      {showInputs.showInput === true ? (
        <div className="ms-4 ps-2">
          <button
            className="add-expense-btn rounded-2 px-3 py-2 text-light"
            onClick={showAddExpenseInputsHandler}
          >
            Add Expense
          </button>
        </div>
      ) : (
        <div className="modal_inputs_container">
          <div
            className="modal_overlay"
            onClick={cancelAddExpenseHandler}
          ></div>
          <form action="" onSubmit={addExpense}>
            <div className="d-flex flex-wrap inputs-container pt-3">
              <div className="input-field py-2">
                <label htmlFor="outlined-basic title" className="d-block">
                  Expense Title
                </label>
                <CssTextField
                  margin="normal"
                  id="outlined-basic title"
                  placeholder="Enter Epense Title"
                  variant="outlined"
                  sx={{ mt: 1, width: "75%" }}
                  type="text"
                  name="title"
                  onChange={userInputHandler}
                  value={userInput.title}
                />
              </div>
              <div className="input-field py-2">
                <label htmlFor="outlined-basic amount" className="d-block">
                  Enter Amount
                </label>
                <CssTextField
                  margin="normal"
                  id="outlined-basic amount"
                  variant="outlined"
                  type="number"
                  sx={{ mt: 1, width: "75%" }}
                  placeholder="Enter Amount"
                  name="amount"
                  onChange={userInputHandler}
                  value={userInput.amount}
                />
              </div>
              <div className="input-field py-2">
                <label htmlFor="outlined-basic date" className="d-block">
                  Select Date
                </label>
                <CssTextField
                  margin="normal"
                  id="outlined-basic date"
                  variant="outlined"
                  type="date"
                  sx={{ mt: 1, width: "75%" }}
                  name="date"
                  onChange={userInputHandler}
                  value={userInput.date}
                  min="2019-01-01"
                  max="2022-12-31"
                />
              </div>
            </div>
            <div className="d-flex inputs-container justify-content-end py-3">
              <div className="me-4">
                <button
                  onClick={cancelAddExpenseHandler}
                  className="cancel-expense-btn btn btn-dark rounded-2 px-3 py-2 text-light"
                >
                  Cancel
                </button>
              </div>
              <div className="ms-2">
                <button className="add-expense-btn rounded-2 px-3 py-2 text-light">
                  Add Expense
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddExpense;
