import React from 'react';
import CityWeather from './CityWeather';

export default {
  component: CityWeather,
  title: 'Weather/City',
  excludeStories: /.*Data$/,
};

export const cityWeatherCloudsData = {
  weather: [{
    description: "scattered clouds",
    icon: "03d",
    main: "Clouds"
  }],
  main: {
    temp: 23.89,
    feels_like: 21.46,
    temp_min: 22.22,
    temp_max: 25.56,
    pressure: 1004,
    humidity: 57
  },
  wind: 5.7
};

export const Default = () => (
  <CityWeather {...cityWeatherCloudsData} />
);

export const NoWeather = () => (
  <CityWeather {...cityWeatherCloudsData} weather={[]} />
);