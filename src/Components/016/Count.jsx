import { useReducer } from "react";
import {
  add1,
  add2,
  add5,
  changeSize,
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
    fs: "10px",
  });

  return (
    <>
      <div className="container">
        <h2
          style={{
            color: counter.color,
            fontSize: counter.fs,
          }}
        >
          {counter.number}
        </h2>
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
          <button onClick={() => dispachCounter(changeSize())}>
            Change size
          </button>
        </div>
      </div>
    </>
  );
}
export default Count;
