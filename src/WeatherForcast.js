import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
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
  } else {
    const apiKey = "df932985a0a4809c71278da10da1097b";
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
