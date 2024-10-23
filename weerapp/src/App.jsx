import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '7442a6a81b2505405e845411ed9551a1'; // Voeg je eigen API Key hier in

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      console.log(response);
      if (!response.ok) {
        throw new Error('Stad niet gevonden');
      }

      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Weer App</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-white py-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Voer een stad in"
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-white hover:bg-gray-300 text-blue-700 font-bold py-2 px-4 rounded-lg"
          >
            Zoek
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mt-3">{error}</p>}
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
}

export default App;