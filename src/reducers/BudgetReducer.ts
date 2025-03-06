import { DraftExpense, Expense } from "../types";
import { v4 as uuidv4 } from "uuid";

export type BudgetActions =
  | { type: "add-buget"; payload: { budget: number } }
  | { type: "show-modal" }
  | { type: "close-modal" }
  | { type: "add-expense"; payload: { expense: DraftExpense } };

export type budgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
};

export const initialState: budgetState = {
  budget: 0,
  modal: false,
  expenses: [],
};

const createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense,
    id: uuidv4(),
  };
};

export const budgetReducer = (
  state: budgetState = initialState,
  action: BudgetActions
) => {
  if (action.type === "add-buget") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }
  if (action.type === "show-modal") {
    return {
      ...state,
      modal: true,
    };
  }
  if (action.type === "close-modal") {
    return {
      ...state,
      modal: false,
    };
  }
  if (action.type === "add-expense") {
    const expense = createExpense(action.payload.expense);

    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false,
    };
  }

  return state;
};
