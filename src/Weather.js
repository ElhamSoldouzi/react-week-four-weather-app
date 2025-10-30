import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>{" "}
      </form>
      <h1>Tehran</h1>
      <ul>
        <li>Thursday 18:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v2/svg/clear_night_light.svg"
            alt="Clear"
          />
          6°C
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
