import React, { useEffect } from "react";
import { useLocation } from "react-router";
import DetailCard from "../components/home/DetailCard";
const CarDetail = () => {
  const location = useLocation();
  const data = location?.state;
  console.log(data);
  useEffect(() => {}, [data?.id]);
  console.log("detail changes1");
  return (
    <div>
      <DetailCard data={data} />
    </div>
  );
};
export default CarDetail;
