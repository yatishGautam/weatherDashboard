import axios from "axios";

const API_KEY = import.meta.env.VITE_API_WEATHERKEY;
const base_URL = "https://api.openweathermap.org/data/2.5/weather";
export const getWeatherData = async (city) => {
  const { lat, lon } = city.coord;
  try {
    const response = await axios.get(base_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric,",
      },
    });
    console.log(response);
  } catch (e) {
    console.log(`cannot fetch the data because ${e}`);
    throw e;
  }
};
