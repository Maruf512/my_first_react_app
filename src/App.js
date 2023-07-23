import "./App.css";
import { Planets } from "./Planets";

function App() {
  // creating object

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  // rander from here
  return (
    <div className="App">
      {planets.map(
        (planet) => !planet.isGasPlanet && <Planets name={planet.name} />
      )}
    </div>
  );
}

export default App;
