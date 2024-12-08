import React, { memo } from "react";

const Search = React.memo(({ onSearch }) => {
  console.log("seach")
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for a car..."
        className="mt-1 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

      />
    </div>
  );
});

export default memo(Search);


