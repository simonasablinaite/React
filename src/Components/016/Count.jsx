import { useReducer } from "react";
import { add1, rem1 } from "../../Actions/count";

function Count() {
  const [counter, dispachCounter] = useReducer(Count, { number: 50 });

  return (
    <>
      <div className="container">
        <h2>{counter.number}</h2>
      </div>
      <div>
        <button onClick={() => dispachCounter(add1())}>+1</button>
        <button onClick={() => dispachCounter(rem1())}>-1</button>
      </div>
    </>
  );
}

export default Count;
