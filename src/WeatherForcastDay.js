import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = props.data.temperature.maximum;
    if (props.unit === "fahrenheit") {
      temperature = (temperature * 9) / 5 + 32;
    }
    return Math.round(temperature);
  }

  function minTemp() {
    let temperature = props.data.temperature.minimum;
    if (props.unit === "fahrenheit") {
      temperature = (temperature * 9) / 5 + 32;
    }
    return Math.round(temperature);
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="Forcast-day mt-4">{day()}</div>{" "}
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="weatherForcast-temperatures">
        {" "}
        <span className="temp-max"> {maxTemp()}°</span> |
        <span className="temp-min"> {minTemp()}°</span>
      </div>
    </div>
  );
}
