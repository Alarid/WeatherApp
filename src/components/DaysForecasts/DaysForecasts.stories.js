import React from 'react'
import DaysForecasts from './DaysForecasts';
import { forecasts } from '../../data/forecasts.js';

export default {
  component: DaysForecasts,
  title: 'Forecasts/Days',
};

export const Default = () => (
  <DaysForecasts forecasts={forecasts} />
);