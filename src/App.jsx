import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { filterCities } from "./HelperFunctions/CitySearchFunction";
import SearchBar from "./Components/SearchBar";
import { VerticalWrapper } from "./Components/CardWrappers";
import { getWeatherData } from "./CustomHooks/useFetch";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [selectedcities, setSelectedcities] = useState([]);
  const [citiesWeatherData, setCitiesWeatherData] = useState([]);

  const addCityToList = useCallback((city) => {
    console.log("selectedCity", selectedcities);

    setSelectedcities((prevSelectedCities) => {
      // Avoid adding duplicate cities
      if (
        prevSelectedCities.some(
          (selectedCity) =>
            selectedCity.name === city.name &&
            selectedCity.country === city.country
        )
      ) {
        return prevSelectedCities;
      }

      return [...prevSelectedCities, city];
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedcities.length == 0) return;
      const lastCity = selectedcities[selectedcities.length - 1];
      const cityWeatherData = await getWeatherData(lastCity);
      console.log("use effect ::::", cityWeatherData);
      setCitiesWeatherData((prevCitiesData) => {
        return [...prevCitiesData, cityWeatherData];
      });
    };

    fetchData();
  }, [selectedcities]);

  return (
    <div className="App">
      <VerticalWrapper>
        <h1>City Search</h1>
        <SearchBar addSelectedCity={addCityToList} />
        <div>
          <VerticalWrapper>
            {citiesWeatherData.map((data, index) => {
              return <WeatherCard key={index} weatherData={data}></WeatherCard>;
            })}
          </VerticalWrapper>
        </div>
      </VerticalWrapper>
    </div>
  );
}

export default App;
