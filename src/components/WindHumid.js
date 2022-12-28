import React from "react";
import "./WindHumid.css";
export default function WandH({ data }) {
  const widthPercentage = data.main.humidity + "%";
  return (
    <div>
      <div className="wind_humid">
        <div className="wind">
          <p>Wind Status</p>
          <h1>
            {Math.round(`${data.wind.speed}` * 2.237)}
            <sub>mph</sub>
          </h1>
          <p>{data.wind.deg} Degree</p>
        </div>
        <div className="wind">
          <p>Humidity</p>
          <h1>
            {data.main.humidity}
            <sub>%</sub>
          </h1>
          <div
            className="bar"
            style={{
              background: "yellow",
              width: widthPercentage,
              height: 10,
            }}
          ></div>
        </div>
      </div>
      <div className="visibilePressure">
        <div className="secondDiv">
          <p>visibility</p>
          <h1>
            {Math.round(`${data.visibility}` / 1609)}
            <sub>miles</sub>
          </h1>
        </div>
        <div className="secondDiv">
          <p>Air Pressure</p>
          <h1>
            {String(`${data.main.pressure}` * 1013.25).slice(0, 2)}
            <sub>mb</sub>
          </h1>
        </div>
      </div>
    </div>
  );
}
