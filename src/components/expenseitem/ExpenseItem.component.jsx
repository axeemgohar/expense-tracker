import Card from "../UI wrappers/Card.component";
import ExpenseDate from "../expensedate/ExpenseDate.component";
import "./expenseitem.styles.css";

const ExpenseItem = (props) => {
  return (
    <Card className="mx-3 my-3 border rounded-top-2 border-bottom-0">
      <div className="d-flex">
        <div className="expense-item-leftside border-end py-2">
          <ExpenseDate expenseDate={props.date} />
        </div>
        <div className="d-flex align-items-center expense-title">
          <h1 className="ms-4">{props.title}</h1>
        </div>
        <div className="text-light rounded-2 bg-dark border border-light border-2 expense-amount d-flex align-items-center justify-content-center">
          ${props.amount}
        </div>
      </div>

      {/* <div className="mb-3 border-top rounded-bottom-2">${props.amount}</div> */}
    </Card>
  );
};

export default ExpenseItem;
