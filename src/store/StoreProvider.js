import React, {
  useReducer,
  
} from "react";
import { reducer } from "../Reducer/Reducer";
import { Store } from "../App";
import { initialState } from "../App";

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
