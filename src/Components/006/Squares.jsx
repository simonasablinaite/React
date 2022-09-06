import { useState } from "react";
import randColor from "../../Functions/randColor";
import rand from "../../Functions/random";

function Squares() {
  const [square, setSquare] = useState([]);

  const add = () => {
    setSquare((square) => [
      ...square,
      { number: rand(100, 999), color: randColor() },
    ]);
  };
  return (
    <>
      <div className="container">
        {square.map((n, i) => (
          <div
            style={{
              backgroundColor: n.color,
              borderRadius: n.number % 2 ? null : "50%",
            }}
            key={i}
          >
            {n.number}
          </div>
        ))}
      </div>
      <button onClick={add}>add [ ]</button>
    </>
  );
}

export default Squares;
