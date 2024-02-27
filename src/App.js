import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [temperature, setTemperature] = useState(0);

  const handleDecrease = () => {
    setTemperature(temperature - 1);
  };

  const handleIncrement = () => {
    setTemperature(temperature + 1);
  };

  const temperatureStyle = {
    backgroundColor:
      temperature <= 0
        ? "var(--cold)"
        : temperature > 0 && temperature <= 10
        ? "var(--netural)"
        : "var(--hot)",
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="temperature-display-container">
          <div style={temperatureStyle} className="temperature-display">
            {temperature}
            {temperature !== 0 && "°C"}
          </div>
          <button onClick={handleDecrease} className="btn">
            -
          </button>
          <button onClick={handleIncrement} className="btn2">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
