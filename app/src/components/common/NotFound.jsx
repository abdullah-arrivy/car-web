import React, { memo } from "react";

const NotFound = ({ message }) => {
  console.log("not found text")
  return (
    <div>
      <p className="text-gray-500">{message}</p>
    </div>
  );
};

export default memo(NotFound);

