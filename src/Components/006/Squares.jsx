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

  const sort = () => {
    setSquare((square) => [...square].sort((a, b) => b.number - a.number));
  };
  return (
    <>
      <div className="container">
        {square.map((n, i) => (
          <div
            style={{
              backgroundColor: n.number < 300 ? "black" : n.color,
              borderRadius: n.number % 2 ? null : "50%",
            }}
            key={i}
          >
            {n.number}
          </div>
        ))}
      </div>
      <button onClick={add}>add [ ]</button>
      <button onClick={sort}>Sort</button>
    </>
  );
}

export default Squares;
