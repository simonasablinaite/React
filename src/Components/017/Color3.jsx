import { useReducer } from "react";
import { actionColor3 } from "../../Actions/color3";
import color3 from "../../Reducers/color3";

function Color3() {
  const [color, dispachColor] = useReducer(color3, { color: 1 });

  return (
    <>
      <div className="container"></div>
      <div
        className="kv"
        style={{ backgroundColor: ["red", "blue", "green"][color.color - 1] }}
      ></div>

      <button onClick={() => dispachColor(actionColor3())}>Change Color</button>
    </>
  );
}
export default Color3;
