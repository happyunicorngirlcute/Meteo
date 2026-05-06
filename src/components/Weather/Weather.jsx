import React, { useState, useEffect } from "react";
import "./Weather.css";
import Card from "../Card/Card";

function Weather({ ville }) {
  const [weather, setWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ville}&days=5&lang=fr`,
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [ville]);

  if (!weather) return null;

  const location = weather.location;
  const day = weather.forecast.forecastday[selectedDay];

  return (
    <div className="weather card">
      <div className="card-content white-text">
        <span className="card-title wind">{location.name}</span>
        <p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
        </p>
        <span className="temperature wind">
          {selectedDay === 0
            ? Math.round(weather.current.temp_c)
            : Math.round(day.day.avgtemp_c)}
          °
        </span>
        <div className="wind">{day.day.condition.text}</div>
      </div>
      <Card
        forecast={weather.forecast.forecastday}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
      />
    </div>
  );
}

export default Weather;
