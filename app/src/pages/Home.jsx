import React, { useState, useCallback } from "react";
import CarCard from "../components/home/CarCard";
import Search from "../components/home/Search";
import EditModal from "../components/home/EditModal";
import carText from "../utils/DummyText";
import NotFound from "../components/common/NotFound";

const HomePage = () => {
  const [filteredData, setFilteredData] = useState(carText);
  const [editCar, setEditCar] = useState(null);

  const handleSearch = useCallback((query) => {
    const filtered = carText.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  }, []);

  const handleEdit = (car) => {
    setEditCar(car);
  };

  const handleCancel = () => {
    setEditCar(null);
  };

  const handleSave = useCallback(
    (updatedCar) => {
      const updatedData = filteredData.map((car) =>
        car.id === updatedCar.id ? updatedCar : car
      );
      setFilteredData(updatedData);
      setEditCar(null);
    },
    [filteredData]
  );

  console.log("ss")
  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredData.length === 0 ? (
        <NotFound message={"No Data Found"} />
      ) : (
        <CarCard cars={filteredData} onEdit={handleEdit} />
      )}
      {editCar && (
        <EditModal
          car={editCar}
          onChange={setEditCar}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default HomePage;
