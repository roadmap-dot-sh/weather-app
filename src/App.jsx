import { useState } from "react";
import { getWeather } from "./services/weatherService";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await getWeather(location);
      setWeather(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather App 🌤️</h1>

      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location..."
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {weather && (
        <div>
          <h2>{weather.resolvedAddress}</h2>
          <p>Temp: {weather.currentConditions.temp}°C</p>
          <p>Wind: {weather.currentConditions.windspeed} km/h</p>
          <p>Rain: {weather.currentConditions.precipprob}%</p>
          <p>Condition: {weather.currentConditions.conditions}</p>
        </div>
      )}
    </div>
  );
}

export default App;