import { Tooltip } from "@mui/material";
import Card from "../UI wrappers/Card.component";
import ExpenseDate from "../expensedate/ExpenseDate.component";
import Trash from "../../assets/Trash.svg";
import "./expenseitem.styles.css";

const ExpenseItem = (props) => {
  const handleDeleteExpense = () => {
    props.onDeleteExpense(props.id);
  };
  return (
    <Card className="mx-3 my-3 border rounded-top-2 border-bottom-0">
      <div className="d-flex">
        <div className="expense-item-leftside border-end py-2">
          <ExpenseDate expenseDate={props.date} />
        </div>
        <div className="d-flex align-items-center expense-title">
          <h2 className="ms-4">{props.title}</h2>
        </div>
        <div className="text-light rounded-2 bg-dark border border-light border-2 expense-amount d-flex align-items-center justify-content-center ps-1 position-relative">
          <Tooltip title={"$" + props.amount} placement="top">
            <h2>${props.amount}</h2>
          </Tooltip>
          <button
            className="position-absolute end-0 bottom-0 btn p-0"
            onClick={handleDeleteExpense}
          >
            <img src={Trash} width={30} alt="Trash" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
