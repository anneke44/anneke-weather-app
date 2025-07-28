import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      location: response.data.city,
      weather: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      feel: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // event.target.reset(); // Reset the form after submission
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "04f3tf2c9f9bboc83b5050dcf54e2f1a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row  mb-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <input
                type="button"
                value="Search"
                className="btn btn-branding"
              />
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} />
      </div>
    );
  } else {
    search();
    // Initial loading state

    return "Loading...";
  }
}
