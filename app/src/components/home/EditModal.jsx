import React from "react";

const EditModal = ({ car, onChange, onCancel, onSave }) => {
  console.log("edit")

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="font-bold text-xl mb-4">Edit {car.name}</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brand Name
          </label>
          <input
            type="text"
            value={car.name}
            onChange={(e) => onChange({ ...car, name: e.target.value })}
            className="mt-2 w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-black rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(car)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EditModal);
