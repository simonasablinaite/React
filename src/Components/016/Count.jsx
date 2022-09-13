import { useReducer } from "react";
import { add1, add2, rem1, rem2 } from "../../Actions/count";
import count from "../../Reducers/count";

function Count() {
  const [counter, dispachCounter] = useReducer(count, { number: 0 });

  const [counter2, dispachCounter2] = useReducer(count, { number: 0 });

  return (
    <>
      <div className="container">
        <h2>{counter.number}</h2>
      </div>
      <div>
        <button onClick={() => dispachCounter(add1())}>+1</button>
        <button onClick={() => dispachCounter(rem1())}>-1</button>
      </div>
      <h2>{counter2.number}</h2>
      <div>
        <button onClick={() => dispachCounter2(add2())}>+2</button>
        <button onClick={() => dispachCounter2(rem2())}>-2</button>
      </div>
    </>
  );
}

export default Count;
