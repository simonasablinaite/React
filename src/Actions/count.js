import { ADD_ONE, REMOVE_ONE } from "../Constants/action";

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
