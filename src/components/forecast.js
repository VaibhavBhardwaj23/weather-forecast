import React from "react";
import "./forecast.css";
export default function Cards({ data }) {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div className="cardsContainer">
      {data.daily.slice(0, 5).map((item, idx) => (
        <div className="cardsForecast" key={idx}>
          <p>{forecastDays[idx]}</p>
          <img
            src={`icons/${item.weather[0].icon}.png`}
            alt="Icon"
            className="Icon"
          ></img>
          <div className="highLow">
            <p>{Math.round(item.temp.max)}°C</p>
            <p>{Math.round(item.temp.min)}°C</p>
          </div>
        </div>
      ))}
    </div>
  );
}
