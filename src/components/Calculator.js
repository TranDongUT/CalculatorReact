import { useContext } from "react";
import { StoreContext } from "../store";
import Digit from "./Digit";
import Operator from "./Operator";
import { Row, Col } from "react-bootstrap";
import style from "./style/Calculator.module.scss";

function Calculator() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <div className={style.container}>
      <div className={style.calculator}>
        <div className={style.outputField}>
          <input readOnly value={state.output} />
        </div>
        {/* Row 1 */}
        <div className={style.buttons}>
          <Row>
            <Col>
              <Operator>C</Operator>
            </Col>
            <Col>
              <Operator>D</Operator>
            </Col>
            <Col>
              <Operator>%</Operator>
            </Col>
            <Col>
              <Operator>/</Operator>
            </Col>
          </Row>
          {/* Row 2 */}
          <Row>
            <Col>
              <Digit>7</Digit>
            </Col>
            <Col>
              <Digit>8</Digit>
            </Col>
            <Col>
              <Digit>9</Digit>
            </Col>
            <Col>
              <Operator>x</Operator>
            </Col>
          </Row>
          {/* Row 3 */}
          <Row>
            <Col>
              <Digit>4</Digit>
            </Col>
            <Col>
              <Digit>5</Digit>
            </Col>
            <Col>
              <Digit>6</Digit>
            </Col>
            <Col>
              <Operator>-</Operator>
            </Col>
          </Row>
          {/* Row 4 */}
          <Row>
            <Col>
              <Digit>1</Digit>
            </Col>
            <Col>
              <Digit>2</Digit>
            </Col>
            <Col>
              <Digit>3</Digit>
            </Col>
            <Col>
              <Operator>+</Operator>
            </Col>
          </Row>
          {/* Row 5 */}
          <Row>
            <Col>
              <Digit>0</Digit>
            </Col>
            <Col>
              <Operator>.</Operator>
            </Col>
            <Col xs={6}>
              <Operator special={true}>=</Operator>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
