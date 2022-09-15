import { ADD_SQ } from "../Constants/action";

function sq(state, action) {
  const newState = [...state];

  switch (action.type) {
    case ADD_SQ:
      newState.push("");
      break;
    default:
  }
}

export default sq;
