import React, { memo } from "react";
import PopularModelsCard from "./PopularModelsCard";
import CustomOptionsCard from "./CustomOptionsCard";
const DetailCard = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-4">
        <img
          src={data.logo}
          alt={`${data.name} logo`}
          className="w-24 h-24 object-contain"
        />
        <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
      </div>

      <p className="mt-4 text-gray-600">{data.description}</p>

      {data.popularModels && data.popularModels.length > 0 && (
        <PopularModelsCard popularModels={data.popularModels} />
      )}

      {data.customOptions && data.customOptions.length > 0 && (
        <CustomOptionsCard customOptions={data.customOptions} />
      )}
    </div>
  );
};

export default memo(DetailCard);
