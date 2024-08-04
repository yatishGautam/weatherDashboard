import React from "react";

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;
  console.log("weather card data", weatherData);

  function convertToCelsius(temperatureInKelvin) {
    return (temperatureInKelvin - 273.15).toFixed(2);
  }

  const { main, name, weather, sys } = weatherData.data;

  return (
    <div className="weatherCard">
      <h3>{name}</h3>
      <h5>{sys?.country}</h5>
      <p>Condition: {weather && weather[0]?.main}</p>
      <p>Temperature: {main && convertToCelsius(main.temp)} °C</p>
      <p>Feels Like: {main && convertToCelsius(main.feels_like)} °C</p>
    </div>
  );
}

export default WeatherCard;
