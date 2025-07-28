import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.location}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherData.date} />
        </li>
        <li>{props.weatherData.weather}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon icon={props.weatherData.icon} />{" "}
          <WeatherTemperature celsius={props.weatherData.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>{props.weatherData.feel}</li>
            <li>{props.weatherData.humidity}</li>
            <li>{props.weatherData.wind}</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
