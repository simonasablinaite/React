import {
  ADD_FIVE,
  ADD_ONE,
  ADD_SQ,
  ADD_TWO,
  BORDER,
  FONT_SIZE,
  RANDOM_COLOR,
  REMOVE_FIVE,
  REMOVE_ONE,
  REMOVE_TWO,
} from "../Constants/action";

export function add1() {
  return {
    type: ADD_ONE,
  };
}

export function rem1() {
  return {
    type: REMOVE_ONE,
  };
}

export function add2() {
  return {
    type: ADD_TWO,
  };
}

export function rem2() {
  return {
    type: REMOVE_TWO,
  };
}

export function add5() {
  return {
    type: ADD_FIVE,
  };
}

export function rem5() {
  return {
    type: REMOVE_FIVE,
  };
}

export function randClr() {
  return {
    type: RANDOM_COLOR,
  };
}

export function changeSize() {
  return {
    type: FONT_SIZE,
  };
}

export function border() {
  return {
    type: BORDER,
  };
}

export function addSq() {
  return {
    type: ADD_SQ,
  };
}
