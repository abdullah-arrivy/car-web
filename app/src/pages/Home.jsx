import React, { useState, useCallback } from "react";
import CarCard from "../components/home/CarCard";
import Search from "../components/home/Search";
import carText from "../utils/DummyText";
import NotFound from "../components/common/NotFound";

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

  console.log("lofa111");
  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredData.length === 0 ? (
        <NotFound message={'No Data Found'} />
      ) : (
        <CarCard cars={filteredData} />
      )}
    </div>
  );
};

export default HomePage;
