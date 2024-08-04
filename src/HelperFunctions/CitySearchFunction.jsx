const cityListPromise = import("../assets/city.list.json");

async function filterCities(searchString) {
  if (!searchString) return [];

  try {
    const { default: cityList } = await cityListPromise;
    return cityList.filter((city) => {
      return city.name.toLowerCase().includes(searchString.toLowerCase());
    });
  } catch (error) {
    console.error("Error loading city list:", error);
    return [];
  }
}

export { filterCities };
