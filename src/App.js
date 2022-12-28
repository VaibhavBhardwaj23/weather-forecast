import "./App.css";
import Search from "./components/Search";
import Today from "./components/Today";
import Cards from "./components/forecast";
import WandH from "./components/WindHumid";
import { api_base, api_key } from "./components/Api";
import { useEffect, useRef, useState } from "react";
import gps from "./resources/gps.png";
import cross from "./resources/cross.png";

function App() {
  // Initializing all the constants

  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);
  const key = api_key;
  const base = api_base;
  const searchDiv = useRef();
  const displayDiv = useRef();

  // All DONE

  // Default Function
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=New+Delhi&units=metric&APPID=8ab0c860b73dfb62cdf3da5abcf64869`
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrentWeather(result);
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=28.6139&lon=77.209&exclude=hourly,minutely&units=metric&appid=49cc8c821cd2aff9af04c9f98c36eb74`
    ).then(async (response) => {
      const foreCastResponse = await response.json();
      setCurrentForecast(foreCastResponse);
    });
  }, []);

  // FINISHED

  // For the GPS ICON

  const getCurrentWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=New+Delhi&units=metric&APPID=8ab0c860b73dfb62cdf3da5abcf64869`
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrentWeather(result);
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=28.6139&lon=77.209&exclude=hourly,minutely&units=metric&appid=49cc8c821cd2aff9af04c9f98c36eb74`
    ).then(async (response) => {
      const foreCastResponse = await response.json();
      setCurrentForecast(foreCastResponse);
    });
  };

  // Finished

  // Switching Back and Forth

  const goSearch = () => {
    displayDiv.current.classList.remove("show");
    searchDiv.current.classList.add("show");
  };
  const goBack = () => {
    displayDiv.current.classList.add("show");
    searchDiv.current.classList.remove("show");
  };

  // Finished

  // Main Search Function

  const handleOnSearchChange = (latitude, longitude) => {
    console.log(latitude, longitude); // Getting Place
    fetch(
      `${base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`
    ).then(async (response) => {
      const weatherResponse = await response.json();
      setCurrentWeather(weatherResponse);
    });

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=49cc8c821cd2aff9af04c9f98c36eb74`
    ).then(async (response) => {
      const foreCastResponse = await response.json();
      setCurrentForecast(foreCastResponse);
    });

    // Switching Displays

    displayDiv.current.classList.add("show");
    searchDiv.current.classList.remove("show");
  };
  return (
    <div className="container">
      {/* Front Panel */}
      <div className="navigation">
        <div ref={displayDiv} className="main--content show ">
          <div className="options">
            <button onClick={goSearch} className="goToSearch">
              Search For Places
            </button>
            <button className="currentLocation">
              <img
                src={gps}
                onClick={getCurrentWeather}
                alt="current"
                className="gpsIcon"
              ></img>
            </button>
          </div>
          {currentWeather && <Today data={currentWeather} />}
        </div>

        {/* Search Div */}

        <div ref={searchDiv} className="search--option ">
          <button onClick={goBack} className="cross">
            <img src={cross} alt="crossIcon" className="crossIcon"></img>
          </button>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
      </div>
      {/* ForeCast */}
      <div className="foreCast">
        <div className="NextDays">
          {currentForecast && <Cards data={currentForecast} />}
        </div>
        {/* Humidity and Pressure */}
        <div className="OtherDetails">
          <h3>Today's Highlights</h3>
          {currentWeather && <WandH data={currentWeather} />}
        </div>
      </div>
    </div>
  );
}

export default App;
