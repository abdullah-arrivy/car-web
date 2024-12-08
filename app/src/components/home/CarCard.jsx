import React from "react";
import { Link } from "react-router";
import { routeText } from "../../routes/RouteText";

const CarCard = ({ cars, onEdit }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
      {cars.map((car) => (
        <div
          key={car.id}
          className="max-w-[490px] rounded-lg w-full overflow-hidden bg-white border border-black/10"
        >
          <div className="card">
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => onEdit(car)}
                className="px-4 py-2 text-black rounded-md mr-2"
              >
                Edit
              </button>
            </div>
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
            <div className="p-3 flex items-center justify-center">
              <Link
                to={routeText.CAR_DETAIL_URL.replace(":id", car.id)}
                state={car}
                className="text-blue-500 hover:underline"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CarCard);
