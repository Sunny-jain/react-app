import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const Store = () => {
    const store = createStore(
      Reducer,
      initialState  
    );

    return store;
}