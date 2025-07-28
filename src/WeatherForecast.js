import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon icon="rain-day" size={36} />
          <div className="WeatherForecast-temperature d-flex justify-content-center gap-1">
            <div className="WeatherForecast-max-temp">19°C </div>
            {"  "}/ <div className="WeatherForecast-min-temp"> 12°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
