import { filterCities } from "../HelperFunctions/CitySearchFunction";
import { useEffect, useState } from "react";
import { HorizontalWrapper, VerticalWrapper } from "./CardWrappers";

function useDebouncing(value, delay) {
  const [debouncedVal, setDeboundedVal] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboundedVal(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedVal;
}

function SearchBar({ addSelectedCity }) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebouncing(searchQuery, 300);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      if (debouncedSearchQuery) {
        const result = await filterCities(debouncedSearchQuery);
        setFilteredCities(result);
      } else {
        setFilteredCities([]);
      }
    };

    fetchResult();
  }, [debouncedSearchQuery]);

  return (
    <div>
      <VerticalWrapper>
        <input
          type="text"
          placeholder="Search For Cities"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <ul>
          {filteredCities.map((city, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  addSelectedCity(city);
                }}
              >
                {city.name}, {city.country}
              </li>
            );
          })}
        </ul>
      </VerticalWrapper>
    </div>
  );
}

export default SearchBar;
