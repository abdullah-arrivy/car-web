import React, { memo } from "react";

const Search = React.memo(({ onSearch }) => {
  console.log("seach")
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for a car..."
      />
    </div>
  );
});

export default memo(Search);


