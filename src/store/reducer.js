import { actions } from ".";
import {
  CALCULATE,
  CLEAR,
  DELETE,
  INSERT_DIGIT,
  INSERT_OPERATOR,
  UPDATE_OPERATOR,
} from "./constants";

export const initState = {
  digit: "",
  store: "",
  current: "",
  operator: "",
  output: "",
};

export function reducer(state, action) {
  // console.log("digit: ", state.digit);
  // console.log("store: ", state.store);
  // console.log("current: ", state.current);
  // console.log("operator: ", state.operator);
  switch (action.type) {
    case INSERT_DIGIT:
      if (action.payload == "." && state.current.includes(".")) {
        return { ...state };
      } else {
        return {
          ...state,
          digit: state.digit + action.payload,
          current: state.digit + action.payload,
          output: `${state.output}${action.payload}`,
        };
      }

    case INSERT_OPERATOR:
      return {
        ...state,
        digit: "",
        operator: action.payload,
        store: state.digit,
        current: action.payload,
        output: `${state.digit}${action.payload}`,
      };

    case UPDATE_OPERATOR:
      return {
        ...state,
        digit: "",
        operator: action.payload,
        current: action.payload,
        output: `${state.store}${action.payload}`,
      };

    case CALCULATE:
      let result = 0;
      if (action.payload == "=" && !state.operator) {
        return { ...state };
      }
      if (state.operator) {
        switch (state.operator) {
          case ".":
            result = state.output;
            break;
          case "+":
            result = Number(state.digit) + Number(state.store);
            break;
          case "-":
            result = Number(state.store) - Number(state.digit);
            break;
          case "x":
            result = Number(state.digit) * Number(state.store);
            break;
          case "/":
            result = Number(state.store) / Number(state.digit);
            break;
          case "%":
            result = Number(state.store) % Number(state.digit);
            break;
          default:
            throw new Error("invalid operator");
        }
      }
      if (action.payload != "=") {
        return {
          ...state,
          operator: action.payload != "=" ? action.payload : "", //new operator
          store: result.toString(),
          digit: "",
          current: action.payload != "=" ? result : "",
          output: `${result}${action.payload != "=" ? action.payload : ""}`,
        };
      }
      return {
        ...state,
        operator: action.payload != "=" ? action.payload : "", //new operator
        store: "",
        digit: result.toString(),
        current: action.payload != "=" ? result : "",
        output: `${result}${action.payload != "=" ? action.payload : ""}`,
      };

    case DELETE:
      let newDigit = 0;
      if (!isNaN(state.current)) {
        if (!state.store) {
          state.digit = state.digit.slice(0, -1);
          console.log(state);
        } else if (!state.digit) {
          state.store = state.store.slice(0, -1);
          console.log(state);
        } else if (state.store && state.digit) {
          newDigit = state.digit.slice(0, -1);
          console.log(state);
        }
      } else {
        state.operator = "";
      }
      // console.log(state);
      return {
        ...state,
        digit: newDigit,
        current: state.output[state.output.length - 1],
        output: state.output.slice(0, -1),
      };

    case CLEAR:
      return {
        digit: "",
        store: "",
        operator: "",
        output: "",
      };

    default:
      throw new Error("invalid action");
  }
}
