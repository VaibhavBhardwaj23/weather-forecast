import React, { useState } from "react";
import "./search.css";
export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(" ");
  const handleOnChange = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=f8a076295fef04f86bc9699a68f0c99b`
      ).then(async (response) => {
        const Response = await response.json();
        console.log(Response);
        onSearchChange(Response[0].lat, Response[0].lon);
      });
      setSearch("");
    }
  };
  const handleOnClick = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=f8a076295fef04f86bc9699a68f0c99b`
    ).then(async (response) => {
      const Response = await response.json();
      console.log(Response);
      onSearchChange(Response[0].lat, Response[0].lon);
    });
  };
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyPress={handleOnChange}
        placeholder="Search for Location"
      ></input>
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
}
