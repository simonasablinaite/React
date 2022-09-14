import {
  ADD_FIVE,
  ADD_ONE,
  ADD_TWO,
  FONT_SIZE,
  RANDOM_COLOR,
  REMOVE_FIVE,
  REMOVE_ONE,
  REMOVE_TWO,
} from "../Constants/action";
import randColor from "../Functions/randColor";
import rand from "../Functions/random";

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

    case ADD_FIVE:
      newState.number += 5;
      break;

    case REMOVE_FIVE:
      newState.number -= 5;
      break;
    case RANDOM_COLOR:
      newState.color = randColor();
      break;
    case FONT_SIZE:
      newState.fs = rand(10, 40) + "px";
      break;
  }

  return newState;
}

export default count;
