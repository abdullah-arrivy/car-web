import React, { memo } from "react";
import { Link } from "react-router";
import { routeText } from "../../routes/RouteText";

const CarCard = ({ cars }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
      {cars.map((car) => (
        <Link
          to={routeText.CAR_DETAIL_URL.replace(":id", car.id)}
          state={car}
          key={car.id}
          className="max-w-[490px] rounded-lg w-[100%] overflow-hidden bg-white border border-black/10"
        >
          <div className="card">
            <div className="grid grid-cols-1 sm:grid-cols-5">
              <div className="col-span-2 p-3 flex justify-center">
                <img
                  src={car.logo}
                  alt={`${car.name} logo`}
                  className="w-full max-w-[150px] object-contain"
                />
              </div>
              <div className="col-span-3 p-3 text-center sm:text-left">
                <h2 className="text-lg font-bold">{car.name}</h2>
                <p className="mb-3 text-gray-600">{car.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default memo(CarCard);
