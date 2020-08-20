import React from 'react';
import DayForecast from './DayForecasts';
import { forecasts } from '../../data/forecasts.js';
import { forecastsByDays } from '../../utils/forecasts';


export default {
  component: DayForecast,
  title: 'Forecasts/Day',
  excludeStories: /.*Data$/,
};

// Group forecasts by days
const data = forecastsByDays(forecasts);
const today = data[Object.keys(data)[0]];
const anotherDay = data[Object.keys(data)[1]];
console.log(today);
export const CurrentDay = () => (
  <DayForecast title="Today" data={today.data} />
);

export const Default = () => (
  <DayForecast title="Default" data={anotherDay.data}/>
);
