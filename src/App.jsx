import { useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("blue");
  const [fontSize, setFontSize] = useState(20);

  const doJob = () => {
    console.log("Hello");
  };

  const clicked = () => {
    setColor("yellowgreen");
  };
  const changeSize = () => {
    setFontSize(60);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: color, fontSize: fontSize }}>STATE</h1>
        <button onClick={clicked}>Click!</button>
        <button onClick={changeSize}>Change size</button>
      </header>
    </div>
  );
}

export default App;
