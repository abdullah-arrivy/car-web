import React, { memo } from "react";

const CarCard = ({ carBrand }) => {
  console.log("car card");
  return (
    <div>
      <img src={carBrand.logo} alt={`${carBrand.name} logo`} />
      <h2>{carBrand.name}</h2>
      <p>{carBrand.description}</p>
    </div>
  );
};

export default memo(CarCard);
