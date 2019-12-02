import React from "react";

const Weather = props => {
  return(
    <div className="infoWeath">
        {props.city &&
        <div>
         <p>Place: {props.city}, {props.country}</p>
         <p>Temperature: {props.temp} °C</p>
       <p> Pressure: {props.pressure} mmHg</p>
        <p>Sunrise: {props.sunset}</p>
          </div>
       }
        <p className = "error">{props.error}</p>
       </div>
  );
}
export default Weather;
