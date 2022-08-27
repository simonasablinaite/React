import rand from "../../Functions/random";

function Cat() {
  return rand(0, 1) ? <h1>Triufelis</h1> : <h2>Triufelis</h2>;
}

export default Cat;
