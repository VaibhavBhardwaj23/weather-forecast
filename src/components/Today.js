import React from "react";
import "./Today.css";
import location from "../resources/location.png";
export default function Today({ data }) {
  const descript = data.weather[0].description;
  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = ["Sun,", "Mon,", "Tues,", "Wed,", "Thu,", "Fri,", "Sat,"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];

    return `${day} ${date} ${month}`;
  };
  return (
    <div className="description">
      <img
        className="icon"
        src={`icons/${data.weather[0].icon}.png`}
        alt="icon.png"
      ></img>
      <h1 className="temperature">
        {Math.round(data.main.temp)}
        <sub>°C</sub>
      </h1>
      <h1 className="describe">{descript}</h1>
      <div className="dates">
        <p> Today • </p>
        <p>{dateBuilder(new Date())}</p>
      </div>
      <div className="location">
        <img className="locationIcon" src={location} alt="Icon--Location"></img>
        <p> {data.name}</p>
      </div>
    </div>
  );
}
