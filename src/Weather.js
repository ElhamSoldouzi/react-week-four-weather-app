import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherDate, setWeatherData] = useState({ ready: false });

  function tempCelsius(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
      date: "Saturday 23:00",
      description: response.data.weather[0].description,
      iconUrl:
        "https://www.gstatic.com/weather/conditions/v1/svg/clear_night_light.svg",
      city: response.data.name,
    });
  }

  if (weatherDate.ready) {
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
          </div>
        </form>
        <h1>{weatherDate.city}</h1>
        <ul>
          <li>{weatherDate.date}</li>
          <li className="text-capitalize">{weatherDate.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherDate.iconUrl}
                alt={weatherDate.description}
                className="float-start"
              />
              <div className="float-start ms-2">
                <span className="temperature">
                  {Math.round(weatherDate.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li></li>
              <li>Humidity : {weatherDate.humidity}%</li>
              <li>Wind :{weatherDate.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let city = "Tehran";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(tempCelsius);

    return "Loaing";
  }
}
