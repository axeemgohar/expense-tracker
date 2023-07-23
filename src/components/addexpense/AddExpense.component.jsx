import { TextField, styled } from "@mui/material";
import "./addexpense.styles.css";
import { useState, useRef, useEffect } from "react";

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
  const elementRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [showInputs, setShowInputs] = useState(true);

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
    const inputData = {
      id: Math.random(),
      date: new Date(userInput.date),
      amount: Number(userInput.amount),
      title: userInput.title,
    };
    props.onGetUserInput(inputData);
    const getLocalStorage = JSON.parse(localStorage.getItem("expenses")) || [];
    localStorage.setItem(
      "expenses",
      JSON.stringify([...getLocalStorage, inputData])
    );

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  const showAddExpenseInputsHandler = () => {
    setShowInputs(false);
  };

  const cancelAddExpenseHandler = () => {
    setShowInputs(true);
  };

  useEffect(() => {
    // Function to update the height state based on the current element height
    const updateHeight = () => {
      if (elementRef.current) {
        const elementHeight = elementRef.current.clientHeight;
        setHeight(elementHeight - 70);
      }
    };

    updateHeight();

    const handleResize = () => {
      updateHeight();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showInputs]);

  return (
    <div
      className="add-expense-form-container d-flex flex-column justify-content-center"
      style={{
        height: `${showInputs === true ? "70px" : `${70 + height}px`}`,
      }}
    >
      {showInputs ? (
        <div className="ms-2 ps-2">
          <button
            className="add-expense-btn rounded-2 px-3 py-2 text-light"
            onClick={showAddExpenseInputsHandler}
          >
            Add Expense
          </button>
        </div>
      ) : (
        <div className="modal_inputs_container" ref={elementRef}>
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
                  className="mui-input-field"
                  margin="normal"
                  id="outlined-basic title"
                  placeholder="Enter Expense Title"
                  variant="outlined"
                  sx={{ mt: 1 }}
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
                  className="mui-input-field"
                  sx={{ mt: 1 }}
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
                  className="mui-input-field"
                  sx={{ mt: 1 }}
                  name="date"
                  onChange={userInputHandler}
                  value={userInput.date}
                  min="2019-01-01"
                  max="2022-12-31"
                />
              </div>
            </div>
            <div className="d-flex inputs-btn-container justify-content-end py-3">
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
