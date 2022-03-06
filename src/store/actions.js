import {
  CALCULATE,
  DELETE,
  INSERT_DIGIT,
  INSERT_OPERATOR,
  CLEAR,
  UPDATE_OPERATOR,
} from "./constants";

export const insertDigit = (payload) => ({
  type: INSERT_DIGIT,
  payload,
});

export const insertOperator = (payload) => ({
  type: INSERT_OPERATOR,
  payload,
});

export const updateOperator = (payload) => ({
  type: UPDATE_OPERATOR,
  payload,
});

export const calculate = (payload) => ({
  type: CALCULATE,
  payload,
});

export const deleteStr = (payload) => ({
  type: DELETE,
});

export const clear = (payload) => ({
  type: CLEAR,
});
