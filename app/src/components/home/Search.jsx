import React, { memo, useRef } from "react";

const Search = React.memo(({ onSearch }) => {
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
