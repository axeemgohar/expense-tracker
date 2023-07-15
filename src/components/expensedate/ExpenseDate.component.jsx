import "./expensedate.styles.css";
const ExpenseDate = (props) => {
  const date = props.expenseDate;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date-container border border-1  rounded-2 mx-auto">
      <div className="expense-date-month text-light py-1 text-center rounded-top-2 border-bottom">
        {month}
      </div>
      <div className="expense-date-day text-center py-1">{day}</div>
      <div className="expense-date-year text-center py-1 bg-dark text-light rounded-bottom-2">
        {year}
      </div>
    </div>
  );
};

export default ExpenseDate;
