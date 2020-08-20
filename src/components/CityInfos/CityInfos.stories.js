import React from 'react'
import CityInfos from './CityInfos'
import { cityWeatherCloudsData } from './CityWeather.stories';

export default {
  component: CityInfos,
  title: 'City Infos',
};

const paris = {
  "name": "Paris",
  "lat": 48.85,
  "lon": 2.35,
  "country": "FR",
  "sunrise": 1597899058,
  "sunset": 1597949833,
  "weatherInfos": {
    ...cityWeatherCloudsData,
    wind: {
      speed: 3.7,
    },
  },
};

const london = {
  "name": "London",
  "lat": 51.51,
  "lon": -0.13,
  "country": "GB",
  "sunrise": 1597899281,
  "sunset": 1597950800,
  "weatherInfos": {
    ...cityWeatherCloudsData,
    wind: {
      speed: 4.2,
    },
  },
}

export const Paris = () => (
  <CityInfos {...paris} />
);

export const London = () => (
  <CityInfos {...london} />
);