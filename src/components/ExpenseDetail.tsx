import { Expense } from "../types";

type expensePropsDet = {
  expense: Expense;
};

function ExpenseDetail({ expense }: expensePropsDet) {
  return <div>ExpenseDetail</div>;
}

export default ExpenseDetail;
