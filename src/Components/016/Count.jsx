import { useReducer } from "react";
import { add1, add2, rem1, rem2 } from "../../Actions/count";
import count from "../../Reducers/count";

function Count() {
  const [counter, dispachCounter] = useReducer(count, { number: 0 });

  return (
    <>
      <div className="container">
        <h2>{counter.number}</h2>
      </div>
      <div>
        <button onClick={() => dispachCounter(add1())}>+1</button>
        <button onClick={() => dispachCounter(rem1())}>-1</button>
        <button onClick={() => dispachCounter(add2())}>+2</button>
        <button onClick={() => dispachCounter(rem2())}>-2</button>
      </div>
    </>
  );
}

export default Count;
