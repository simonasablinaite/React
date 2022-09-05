import { useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("blue");
  const [fontSize, setFontSize] = useState(20);
  const [count, setCount] = useState(1);

  const doJob = () => {
    console.log("Hello");
  };

  const clicked = () => {
    setColor("yellowgreen");
  };

  const changeSize = () => {
    setFontSize(60);
  };

  const doCount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: color, fontSize: fontSize }}>STATE {count}</h1>
        <button onClick={clicked}>Click!</button>
        <button onClick={changeSize}>Change size</button>
        <button onClick={doCount}>+1</button>
      </header>
    </div>
  );
}

export default App;
