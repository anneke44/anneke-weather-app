import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
    const apiKey = "04f3tf2c9f9bboc83b5050dcf54e2f1a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.location}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, [props.location]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay forecastData={dailyForecast} />
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
    const apiKey = "04f3tf2c9f9bboc83b5050dcf54e2f1a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.location}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div className="WeatherForecast">Loading...</div>;
  }
}
