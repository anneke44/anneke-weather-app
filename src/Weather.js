import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      location: response.data.city,
      date: new Date(response.data.time * 1000),
      weather: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      feel: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-success" />
            </div>
          </div>
        </form>
        <h1>{weatherData.location}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.weather}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt="cloudy" />{" "}
            {weatherData.temperature}°C
          </div>
          <div className="col-6">
            <ul>
              <li>{weatherData.feel}</li>
              <li>{weatherData.humidity}</li>
              <li>{weatherData.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    // Initial loading state

    return "Loading...";
  }
}
