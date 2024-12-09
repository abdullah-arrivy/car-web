import React, { memo } from "react";

const UserProfile = ({ name, age }) => {
  console.log("user profile rendered");
  return (
    <div>
      <h1>name : {name}</h1>
      <h1>age : {age}</h1>
    </div>
  );
};

const areEqual = (pProps, nProps) => {
  return pProps.name === nProps.name;
};
export default memo(UserProfile, areEqual);
