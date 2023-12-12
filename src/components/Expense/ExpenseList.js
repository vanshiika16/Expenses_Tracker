import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }
  return (
    <ul className="expenses-list">
      {props.list.map(
        (
          expense //now this data is stored dynamically
        ) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
    </ul>
  );
};

export default ExpenseList;
