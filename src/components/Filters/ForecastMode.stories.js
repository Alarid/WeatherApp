import React from 'react';
import { action } from '@storybook/addon-actions';
import ForecastMode from './ForecastMode';

export default {
  component: ForecastMode,
  title: 'Filters/Forecast Mode',
};

const changeMode = action('changeMode');

export const Default = () => (
  <ForecastMode mode="3hours" changeMode={changeMode} hidden={false} />
);

export const Hourly = () => (
  <ForecastMode mode="hourly" changeMode={changeMode} hidden={false} />
);

export const Hidden = () => (
  <ForecastMode mode="3hours" changeMode={changeMode} hidden={true} />
);