import logo from "./logo.svg";
import "./App.css";

import InputFindLocation from "./components/InputFindLocation";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Weather App Project</h1>
      <InputFindLocation />
    </div>
  );
}

export default App;
