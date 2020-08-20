import React from 'react';
import { HourForecast } from './HourForecast';

export default {
  title: 'Forecasts/Hour',
  component: HourForecast,
  decorators: [story => <div style={{width: '150px'}}>{story()}</div> ],
  excludeStories: /.*Data$/,
};

export const clearData = {
  dt: new Date().getTime(),
  weather: {
    main: "Clear",
    description: "clear sky",
    icon: "01d"
  },
  temp: 28,
  humidity: 81,
  wind: 2.66,
};

export const cloudsData = {
  dt: new Date().getTime(),
  weather: {
    main: "Clouds",
    description: "few clouds",
    icon: "02n"
  },
  temp: 18,
  humidity: 85,
  wind: 1.5,
}

export const rainData = {
  dt: new Date().getTime(),
  weather: {
    main: "Rain",
    description: "light rain",
    icon: "10n"
  },
  temp: 15,
  humidity: 93,
  wind: 4.3,
}

export const Clear = () => <HourForecast {...clearData} />
export const Clouds = () => <HourForecast {...cloudsData} />
export const Rain = () => <HourForecast {...rainData} />