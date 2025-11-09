import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "4e4452b3b8e30dte63o4ebba04a0fef4";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForcast">
        {" "}
        <div className="row">
          {forecast.map(function (dailyForcast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  {" "}
                  <WeatherForcastDay
                    key={index}
                    data={dailyForcast}
                    unit={props.unit}
                  />{" "}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
