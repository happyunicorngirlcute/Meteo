import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function Form({ setVille }) {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 👈 empêche le rechargement
    if (!value) return;

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}&days=5&lang=fr`,
      );
      if (res.ok) {
        setVille(value);
      }
    } catch (e) {
      // erreur → on garde auto:ip
    }

    setValue("");
  };

  return (
    <form
      className="flex flex-column justify-content-center align-items-center gap-3"
      onSubmit={handleSubmit} // 👈 onSubmit au lieu de onClick
    >
      <div className="flex flex-column gap-2" style={{ width: "256" }}>
        <label htmlFor="ville">Ville</label>
        <InputText
          id="ville"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="filled"
          style={{
            background: "white",
            border: "1px solid #555",
            color: "#06B6D4",
        borderRadius: 8,
            width: "256px"
          }}
        />
      </div>

      <Button
        label="Changer"
        icon="pi pi-check"
        type="submit"
        style={{ width: "256px", color: "white" }}
      />
    </form>
  );
}

export default Form;
