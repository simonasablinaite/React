import { COLOR_3 } from "../Constants/017";

function color3(state, action) {
  let newState = { ...state };

  switch (action.type) {
    case COLOR_3:
      newState.color = newState.color === 3 ? 1 : newState.color + 1;
      break;

    default:
      break;
  }
  return newState;
}
export default color3;
