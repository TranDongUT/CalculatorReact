import { useContext } from "react";
import { StoreContext, actions } from "../store";
import style from "./style/Operator.module.scss";

function Operation({ special, children }) {
  const [state, dispatch] = useContext(StoreContext);

  const handleOperator = (operator) => {
    console.log(operator);
    if (
      operator == "." ||
      operator == "=" ||
      operator == "C" ||
      operator == "D"
    ) {
      switch (operator) {
        case ".":
          dispatch(actions.insertDigit(operator));
          break;
        case "C":
          dispatch(actions.clear());
          break;
        case "D":
          dispatch(actions.deleteStr());
          break;
        case "=":
          dispatch(actions.calculate(operator));
      }
    } else if (!isNaN(state.current) && !state.operator) {
      dispatch(actions.insertOperator(operator));
    } else if (!isNaN(state.current) && state.operator && operator !== ".") {
      dispatch(actions.calculate(operator));
    } else {
      dispatch(actions.updateOperator(operator));
    }
  };

  return (
    <div
      className={
        special ? `${style.special} ${style.operation}` : style.operation
      }
      onClick={() => handleOperator(children)}
    >
      {children}
    </div>
  );
}

export default Operation;
