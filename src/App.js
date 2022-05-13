import "./App.css";

import InputFindLocation from "./components/InputFindLocation";
import LocationList from "./components/LocationList";

//Context
import LocationState from "./context/Location/LocationState";

function App() {
  return (
    <LocationState>
      <div className="App">
        <h1 className="text-3xl font-bold">Weather App Project</h1>
        <InputFindLocation />
        <LocationList />
      </div>
    </LocationState>
  );
}

export default App;
