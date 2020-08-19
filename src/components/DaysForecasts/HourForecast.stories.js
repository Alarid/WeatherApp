import React from 'react';
import { HourForecast } from './HourForecast';

export default {
  title: 'Forecasts/Hour',
  component: HourForecast,
  decorators: [story => <div style={{ width: '150px'}}> {story()} </div>]
};

const clearData = {
  dt: new Date(),
  weather: [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
  }],
  temp: 28,
  humidity: 81,
  wind: 2.66,
};

const cloudsData = {
  dt: new Date(),
  weather: [{
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02n"
  }],
  temp: 18,
  humidity: 85,
  wind: 1.5,
}

export const Clear = () => <HourForecast {...clearData} />
export const Clouds = () => <HourForecast {...cloudsData} />