import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function tempCelsius(response) {
    console.group(response.data);
  }

  const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
  let city = "Tehran";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(tempCelsius);
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>{" "}
      </form>
      <h1>Tehran</h1>
      <ul>
        <li>Thursday 18:00</li>
        <li>Clear</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://www.gstatic.com/weather/conditions/v2/svg/clear_night_light.svg"
              alt="Clear"
              className="float-start"
            />
            <div className="float-start ms-2">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitiation : 0%</li>
            <li>Humidity : 19%</li>
            <li>Wind :6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
