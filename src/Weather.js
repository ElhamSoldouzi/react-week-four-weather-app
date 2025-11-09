import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";
import axios from "axios";
import "./Weather.css";

import logo from "./images/shecodes-logo.png";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function tempCelsius(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      city: response.data.city,
      coordinates: response.data.coordinates,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "4e4452b3b8e30dte63o4ebba04a0fef4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(tempCelsius);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <img src={logo} className="logo" alt="shaecodes logo" />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                autoFocus="on"
                onChange={cityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 form-btn"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForcast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
