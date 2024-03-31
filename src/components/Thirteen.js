import React, { useEffect } from "react";
import { useState } from "react";
export default function Thirteen() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
      });}

    
  }, []);
    
  return <div>{weather}</div>;
}
