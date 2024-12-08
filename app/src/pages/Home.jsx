// import React, { useState, useCallback } from "react";
// import CarCard from "../components/home/CarCard";
// import Search from "../components/home/Search";
// import carText from "../utils/DummyText";

// const HomePage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredData,setFilteredData] =useState(carText);

//   const handleSearch = useCallback(
//     (query) => {
//       setSearchQuery(query);
//     },
//     [searchQuery]
//   );

//   const filteredCars = carText.filter((car) =>
//     car.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   console.log("lof1");
//   return (
//     <div>
//       <Search onSearch={handleSearch} />
//       {filteredCars.length === 0 ? (
//         <div>nothing to show </div>
//       ) : (
//         filteredCars.map((car) => <CarCard key={car.name} carBrand={car} />)
//       )}
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useCallback } from "react";
import CarCard from "../components/home/CarCard";
import Search from "../components/home/Search";
import carText from "../utils/DummyText";

const HomePage = () => {
  const [filteredData, setFilteredData] = useState(carText);
  const [count,setCount]=useState(0);
  const handleAdd=()=>{
    console.log('add')
    setCount((p)=>p+1);
  }

  const handleSearch = useCallback(
    (query) => {
      console.log("Search Query:", query);

      const filtered = carText.filter((car) =>
        car.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("Filtered Cars:", filtered);
      setFilteredData(filtered);
    },
    [filteredData]
  );
  // const filteredCars = carText.filter((car) =>
  //   car.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  console.log("lofa1");
  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredData.length === 0 ? (
        <div>nothing to show </div>
      ) : (
        filteredData.map((car) => <CarCard key={car.name} carBrand={car} />)
      )}

      <div>
        <h2>{count}</h2>
        <button onClick={handleAdd}>Click</button>
      </div>
    </div>
  );
};

export default HomePage;
