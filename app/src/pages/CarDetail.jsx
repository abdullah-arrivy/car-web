import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import DetailCard from '../components/home/DetailCard';
const CarDetail=()=>{
    const location =useLocation();
    const data = location?.state;
    console.log(data);
    useEffect(()=>{
        // console.log("***data***", data);

    },[data?.id])
    return(
        <div>
            <DetailCard data={data} />
        </div>
    )
}
export default CarDetail;