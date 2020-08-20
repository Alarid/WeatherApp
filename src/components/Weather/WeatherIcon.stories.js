import React from 'react';
import WeatherIcon from './WeatherIcon';

import { clearData, cloudsData, rainData } from '../DaysForecasts/HourForecast.stories';

export default {
  component: WeatherIcon,
  title: 'Weather/Icon',
  decorators: [story => <div style={{width: '150px'}}>{story()}</div> ]
}

export const Clear = () => (
  <WeatherIcon icon={clearData.weather.icon} desc={clearData.weather.description} />
);

export const Clouds = () => (
  <WeatherIcon icon={cloudsData.weather.icon} desc={cloudsData.weather.description} />
);

export const Rain = () => (
  <WeatherIcon icon={rainData.weather.icon} desc={rainData.weather.description} />
);

export const RainCenter = () => (
  <WeatherIcon icon={rainData.weather.icon} desc={rainData.weather.description} center />
);