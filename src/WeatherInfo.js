import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="WeatherInfo-header">
        <h1>{props.weatherData.location}</h1>
        <ul>
          <li>
            <FormattedDate date={props.weatherData.date} />
          </li>
          <li className="fst-italic text-capitalize">
            {props.weatherData.weather}
          </li>
        </ul>
      </div>
      <div className="row m-4">
        <div className="col-6">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <WeatherIcon icon={props.weatherData.icon} size={56} />{" "}
            </div>{" "}
            <div>
              <WeatherTemperature celsius={props.weatherData.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6   align-self-center text-center">
          <ul className="WeatherInfo-conditions">
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
