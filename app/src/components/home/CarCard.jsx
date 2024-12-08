import React, { memo, useState } from "react";
import { Link } from "react-router";
import { routeText } from "../../routes/RouteText";

const CarCard = ({ cars }) => {
  const [edit, setEdit] = useState(false);
  const [brand, setBrand] = useState(null);

  const handleEdit = (car) => {
    setBrand(car);
    setEdit(true);
  };

  const handleCancel = () => {
    setBrand(null);
    setEdit(false);
  };


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
                onClick={() => handleEdit(car)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
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

          {edit && brand?.id === car.id && (
            <div className="edit-overlay">
              <div className="p-4 bg-white shadow-lg rounded-lg">
                <h3 className="font-bold text-xl">Edit {car.name}</h3>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={brand.name}
                    onChange={(e) =>
                      setBrand({ ...brand, name: e.target.value })
                    }
                    className="mt-2 w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default memo(CarCard);
