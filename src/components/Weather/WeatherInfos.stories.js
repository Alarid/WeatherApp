import React from 'react';
import WeatherInfos from './WeatherInfos';

import { clearData, cloudsData, rainData } from '../DaysForecasts/HourForecast.stories';

export default {
  component: WeatherInfos,
  title: 'Weather/Infos',
  decorators: [story => <div style={{width: '150px'}}>{story()}</div> ]
};

export const Clear = () => (
  <WeatherInfos {...clearData} weather={clearData.weather.main} />
);

export const ClearCenter = () => (
  <WeatherInfos {...clearData} weather={clearData.weather.main} center/>
);

export const Rain = () => (
  <WeatherInfos {...rainData} weather={rainData.weather.main} />
);

export const RainTopCenter = () => (
  <WeatherInfos {...rainData} weather={rainData.weather.main} center marginTop />
);

export const Clouds = () => (
  <WeatherInfos {...cloudsData} weather={cloudsData.weather.main} />
);

export const CloudsMarginTop = () => (
  <WeatherInfos {...cloudsData} weather={cloudsData.weather.main} marginTop />
);