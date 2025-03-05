export type BudgetActions = { type: "add-buget"; payload: { budget: number } };

export type budgetState = {
  budget: number;
};

export const initialState: budgetState = {
  budget: 0,
};

export const budgetReducer = (
  state: budgetState = initialState,
  actions: BudgetActions
) => {
  if (actions.type === "add-buget") {
    return {
      ...state,
      budget: actions.payload.budget,
    };
  }

  return state;
};
