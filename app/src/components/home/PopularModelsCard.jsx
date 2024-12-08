import React, { memo } from 'react';

const PopularModelsCard = ({ popularModels }) => {
  console.log("popluar option");

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700">Popular Models</h2>
      <div className="mt-2 space-y-4">
        {popularModels.map((model, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-md border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-800">{model.name}</h3>
            <p className="text-gray-600">Base Price: ${model.basePrice}</p>
            {model.features && model.features.length > 0 && (
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {model.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(PopularModelsCard);
