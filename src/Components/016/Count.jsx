import { useReducer } from "react";
import {
  add1,
  add2,
  add5,
  randClr,
  rem1,
  rem2,
  rem5,
} from "../../Actions/count";
import count from "../../Reducers/count";

function Count() {
  const [counter, dispachCounter] = useReducer(count, {
    number: 0,
    color: "#E5FFCC",
  });

  return (
    <>
      <div className="container">
        <h2 style={{ color: counter.color }}>{counter.number}</h2>
      </div>
      <div>
        <button onClick={() => dispachCounter(add1())}>+1</button>
        <button onClick={() => dispachCounter(rem1())}>-1</button>
        <button onClick={() => dispachCounter(add2())}>+2</button>
        <button onClick={() => dispachCounter(rem2())}>-2</button>
        <button onClick={() => dispachCounter(add5())}>+5</button>
        <button onClick={() => dispachCounter(rem5())}>-5</button>
        <div>
          <button onClick={() => dispachCounter(randClr())}>
            Change color
          </button>
        </div>
      </div>
    </>
  );
}
export default Count;
