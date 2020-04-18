import { useReducer } from "react";

const INITIAL_STATE = {
  result: "",
};

const somaReducer = (state = INITIAL_STATE, action) => {
  console.log("action executada", JSON.stringify(action));
  switch (action.type) {
    case "SUBTRACAO":
    case "SOMA":
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

const useStore = () => useReducer(somaReducer, INITIAL_STATE);

export default useStore;
