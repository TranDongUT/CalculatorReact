import { useContext } from "react";
import { StoreContext, actions } from "../store";
import style from "./style/Digit.module.scss";

function Digit({ children }) {
  const [state, dispatch] = useContext(StoreContext);

  const handleDigit = (digit) => {
    dispatch(actions.insertDigit(digit));
  };

  return (
    <div className={style.digit} onClick={() => handleDigit(children)}>
      {children}
    </div>
  );
}

export default Digit;
