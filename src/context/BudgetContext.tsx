import { useReducer, createContext, ReactNode } from "react";
import {
  BudgetActions,
  budgetReducer,
  budgetState,
  initialState,
} from "../reducers/BudgetReducer";

type BudgetContextProps = {
  state: budgetState;
  dispatch: React.ActionDispatch<[actions: BudgetActions]>;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};
