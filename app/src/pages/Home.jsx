import React, { useState, useCallback } from "react";
import CarCard from "../components/home/CarCard";
import Search from "../components/home/Search";
import carText from "../utils/DummyText";
import NotFound from "../components/common/NotFound";

const HomePage = () => {
  const [filteredData, setFilteredData] = useState(carText);

  const handleSearch = useCallback((query) => {
    const filtered = carText.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  }, []);

  console.log("lofa1111");
  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredData.length === 0 ? (
        <NotFound message={"No Data Found"} />
      ) : (
        <CarCard cars={filteredData} />
      )}
    </div>
  );
};

export default HomePage;
