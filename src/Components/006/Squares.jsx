import { useState } from "react";

function Squares() {
  const [square, setSquare] = useState([]);

  const add = () => {
    setSquare((square) => [...square, ""]);
  };
  return (
    <>
      <div className="container">
        {square.map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
      <button onClick={add}>add []</button>
    </>
  );
}

export default Squares;
