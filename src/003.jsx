import "./App.css";
import Cat from "./Components/003/Cat";
import Racoon from "./Components/003/Racoon";
// import Dog from "./Components/003/Dog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Racoon></Racoon>
        {/* <Dog></Dog> */}
        <h1>Start</h1>
        {/* <Dog></Dog> */}
        <Cat />
      </header>
    </div>
  );
}

export default App;
