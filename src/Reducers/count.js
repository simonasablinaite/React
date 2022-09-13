import { ADD_ONE, REMOVE_ONE } from "../Constants/action";

function count(state, action) {
  let newState = { ...state };

  switch (action.type) {
    case ADD_ONE:
      newState.number++;
      break;

    default:
      break;

    case REMOVE_ONE:
      newState.number--;
      break;
  }

  return newState;
}

export default count;
