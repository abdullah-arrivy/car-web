import React, { useState, useCallback } from "react";
import CarCard from "../components/home/CarCard";
import Search from "../components/home/Search";
import carText from "../utils/DummyText";

const HomePage = () => {
  const [filteredData, setFilteredData] = useState(carText);

  const handleSearch = useCallback(
    (query) => {
      console.log("Search Query:", query);

      const filtered = carText.filter((car) =>
        car.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("Filtered Cars:", filtered);
      setFilteredData(filtered);
    },
    []
  );

  console.log("lofa1");
  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredData.length === 0 ? (
        <div className="mt-4 text-center">Nothing to show</div>
      ) : (
        <CarCard cars={filteredData} />
      )}
    </div>
  );
};

export default HomePage;
