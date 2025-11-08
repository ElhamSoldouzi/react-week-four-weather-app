import React, { useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  useEffect(() => {
    if (props.cordinates) {
      let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
      let longitude = props.cordinates.lon;
      let latitude = props.cordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }
  }, [props.cordinates]);

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <div className="forcast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forcast-temp">
            <span className="forcast-temp-max">19°</span>
            <span className="forcast-temp-min">16°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
