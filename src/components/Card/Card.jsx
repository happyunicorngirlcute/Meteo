import React from "react";
import "../Weather/Weather.css";

function getDayName(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", { weekday: "long" });
}

function Card({ forecast, setSelectedDay, selectedDay }) {
  return (
    <div className="card-action">
      {forecast.map((day, index) => (
        <a
          key={day.date}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedDay(index);
          }}
          style={
            index === selectedDay
              ? { fontWeight: "bold", color: "#06B6D4" }
              : { color: "white" }
          }
        >
          {getDayName(day.date)}
        </a>
      ))}
    </div>
  );
}

export default Card;