import { useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("blue");

  const doJob = () => {
    console.log("Hello");
  };

  const clicked = () => {
    setColor("yellowgreen");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: color }}>STATE</h1>
        <button onClick={clicked}>Click!</button>
      </header>
    </div>
  );
}

export default App;
