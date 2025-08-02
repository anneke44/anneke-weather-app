import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon icon={props.forecastData.condition.icon} size={36} />
      <div className="WeatherForecast-temperature d-flex justify-content-center gap-1">
        <div className="WeatherForecast-max-temp">
          {Math.round(props.forecastData.temperature.maximum)}°C{" "}
        </div>
        {"  "}/{" "}
        <div className="WeatherForecast-min-temp">
          {" "}
          {Math.round(props.forecastData.temperature.minimum)}°C
        </div>
      </div>
    </div>
  );
}
