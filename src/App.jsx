import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { filterCities } from "./HelperFunctions/CitySearchFunction";
import SearchBar from "./Components/SearchBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>City Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;
