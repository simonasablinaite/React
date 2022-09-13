import { ADD_ONE, ADD_TWO, REMOVE_ONE, REMOVE_TWO } from "../Constants/action";

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

    case ADD_TWO:
      newState.number += 2;
      break;

    case REMOVE_TWO:
      newState.number -= 2;
      break;
  }

  return newState;
}

export default count;
