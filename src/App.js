import "./App.css";

import InputFindLocation from "./components/InputFindLocation";
import LocationList from "./components/LocationList";
import LocationTarget from "./components/LocationTarget";

//Context
import LocationState from "./context/Location/LocationState";

function App() {
  return (
    <LocationState>
      <div className="App">
        <h1 className="text-3xl font-bold">Weather App Project</h1>
        <InputFindLocation />
        <LocationList />
        <LocationTarget />
      </div>
    </LocationState>
  );
}

export default App;
