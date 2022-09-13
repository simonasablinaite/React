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

  const sort2 = () => {
    setSquare((square) => [...square].sort((a, b) => a.number - b.number));
  };

  const black = () => {
    setSquare((square) => [...square].filter(n.number < 300 ? n.number : null));
  };

  return (
    <>
      <h1>STATE {square.filter((square) => square.number < 300).length}</h1>
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
      <div>
        <button onClick={add}>add [ ]</button>
        <button onClick={sort}>Sort</button>
        <button onClick={sort2}>Sort2</button>
        <button onClick={black}>only black</button>
      </div>
    </>
  );
}

export default Squares;
