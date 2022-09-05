import "./App.css";
import Cat from "./Components/004/Cat.jsx";
import randColor from "./Functions/randColor.js";

const cats = [
  { id: 1, weight: 5, name: "Murka" },
  { id: 2, weight: 8, name: "Pilkis" },
  { id: 3, weight: 2, name: "Pūkis" },
  { id: 4, weight: 3, name: "Rainis" },
  { id: 5, weight: 5, name: "Brisius" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lists</h1>
        <div className="container">
          {[...cats]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((cat, i) => (
              <Cat i={i} key={cat.id} cat={cat} />
            ))}
        </div>

        {/* <div className="container">
          <Cat catName="Pilkis" weight="8 kg." />
          <Cat catName="Garfildas" weight="12 kg." />
          <Cat catName="Bone" weight="15 kg." />
        </div> */}

        <h1>
          {[..."Dinozauras"].map((l, i) => (
            <span key={i} style={{ color: randColor() }}>
              {l}
            </span>
          ))}
        </h1>
      </header>
    </div>
  );
}

export default App;
