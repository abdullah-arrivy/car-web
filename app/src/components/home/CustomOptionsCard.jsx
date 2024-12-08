import React, { memo } from 'react';

const CustomOptionsCard = ({ customOptions }) => {
  console.log("custom option");
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700">Custom Options</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        {customOptions.map((option, index) => (
          <li key={index}>
            {option.option} - ${option.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(CustomOptionsCard);
