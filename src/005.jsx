import { useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("blue");
  const [fontSize, setFontSize] = useState(20);
  const [count, setCount] = useState(1);
  const [ls, setLs] = useState("5px");

  const doJob = () => {
    console.log("Hello");
  };

  const clicked = () => {
    setColor((color) => (color === "blue" ? "red" : "blue"));
  };

  const changeSize = () => {
    setFontSize((fontSize) => (fontSize === "20px" ? "60px" : "20px"));
  };

  const doCount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1
          style={{
            color: color,
            fontSize: fontSize,
            letterSpacing: ls,
          }}
        >
          STATE {count}
        </h1>
        <button onClick={clicked}>Click!</button>
        <button onClick={changeSize}>Change size</button>
        <button onClick={doCount}>+1</button>
        <button onClick={() => setLs("5px")}>SPACING 5</button>
        <button onClick={() => setLs("10px")}>SPACING 10</button>
      </header>
    </div>
  );
}

export default App;
