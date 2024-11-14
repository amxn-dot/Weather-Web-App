import axios from 'axios';
import { useState } from 'react';
import { WeatherCard } from './components/WeatherCard';

interface Weather {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  city: string;
}

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'c0068356cc0558d30109dffd5164c4cf'; // Replace with your OpenWeatherMap API key
  
  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather({
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        description: response.data.weather[0].description,
        city: response.data.name,
      });
    } catch (err) {
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-bg min-h-screen flex items-center justify-center p-6">
      <WeatherCard
        weather={weather}
        loading={loading}
        error={error}
        onSearch={fetchWeather}
      />
    </div>
  );
}

export default App;
