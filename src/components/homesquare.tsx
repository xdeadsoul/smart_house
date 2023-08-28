import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './homesquare.css';

const SquareTimeTemperature: React.FC = () => {
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentTime, setCurrentTime] = useState('');


  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 400);
    return () => clearInterval(intervalId);
  }, []);

  const fetchWeatherData = () => {
    const timezoneApiUrl = 'https://worldtimeapi.org/api/timezone/Africa/Tunis';
    axios
      .get(timezoneApiUrl)
      .then((response) => {
        const { datetime } = response.data;
        const time = new Date(datetime).toLocaleTimeString('en-US', { timeZone: 'Africa/Tunis' });
        setCurrentTime(time);
      })
      .catch((error) => {
        console.error('Error fetching time data:', error);
      });

    const apiKey = 'd45bfc0158d08a80a36014a918f8896e';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?id=2464915&units=metric&appid=${apiKey}`;

    axios
      .get(weatherApiUrl)
      .then((response) => {
        const { main } = response.data;
        const temperature = `${main.temp.toFixed(1)}°C`;
        setCurrentTemperature(temperature);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  return (
    <div className="square-time-temperature">
      <div className="time">{new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Tunis' })}</div>
      <div className="temperature">{currentTemperature}</div>
    </div>
  );
};

export default SquareTimeTemperature;
