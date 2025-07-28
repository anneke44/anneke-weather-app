import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="FormattedDate">
      {day} {hour}:{minute}
    </div>
  );
}
