import { Droplets, MapPin, Search, Thermometer, Wind } from 'lucide-react';
import React from 'react';
import { WeatherIcon } from './WeatherIcon';

interface WeatherData {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  city: string;
}

interface WeatherCardProps {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  onSearch: (city: string) => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  loading,
  error,
  onSearch,
}) => {
  const [city, setCity] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="glass rounded-3xl p-8 w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="search-input w-full px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <Search size={20} />
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center text-white/70 py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white mx-auto mb-4"></div>
          <p>Fetching weather data...</p>
        </div>
      )}

      {error && (
        <div className="text-red-300 text-center bg-red-500/10 p-4 rounded-xl border border-red-500/20">
          {error}
        </div>
      )}

      {weather && !loading && !error && (
        <div className="weather-card-content text-white">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-white/80 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-lg font-medium">{weather.city}</span>
              </div>
              <h1 className="text-6xl font-bold mb-2 flex items-start">
                {Math.round(weather.temp)}
                <span className="text-3xl text-white/80">°C</span>
              </h1>
              <p className="text-xl capitalize text-white/90">{weather.description}</p>
            </div>
            <div className="weather-icon">
              <WeatherIcon description={weather.description} className="w-24 h-24" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="stat-card flex items-center gap-3 bg-white/10 rounded-2xl p-4 cursor-pointer">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <Thermometer className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Feels like</p>
                <p className="text-xl font-semibold">{Math.round(weather.temp)}°C</p>
              </div>
            </div>

            <div className="stat-card flex items-center gap-3 bg-white/10 rounded-2xl p-4 cursor-pointer">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <Droplets className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Humidity</p>
                <p className="text-xl font-semibold">{weather.humidity}%</p>
              </div>
            </div>

            <div className="stat-card flex items-center gap-3 bg-white/10 rounded-2xl p-4 cursor-pointer col-span-2">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <Wind className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Wind Speed</p>
                <p className="text-xl font-semibold">{weather.windSpeed} km/h</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};