import React from 'react';
import './App.css';

function WeatherInfo({ data }) {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="mt-8 bg-white bg-opacity-90 rounded-lg shadow-lg p-6 max-w-xs text-center">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <img src={iconUrl} alt={weather[0].description} className="mx-auto my-4" />
      <p className="text-lg text-gray-700 capitalize">{weather[0].description}</p>
      <p className="text-2xl font-semibold text-gray-800">{main.temp}°C</p>
      <div className="mt-4">
        <p className="text-sm text-gray-600">Gevoelstemperatuur: {main.feels_like}°C</p>
        <p className="text-sm text-gray-600">Luchtvochtigheid: {main.humidity}%</p>
        <p className="text-sm text-gray-600">Windsnelheid: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherInfo;