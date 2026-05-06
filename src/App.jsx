import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";

function App() {
  const [ville, setVille] = useState("auto:ip");
  return (
    <div className="App">
      <Header />
      <div className="row">
       <div className="row" style={{display: "flex", justifyContent: "center"}}>
  <Weather ville={ville} />
</div>
      </div>
      <Form setVille={setVille} />
    </div>
  );
}

export default App;
