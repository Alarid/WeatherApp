import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

import moment from 'moment';

import WeatherIcon from '../Weather/WeatherIcon';
import { WeatherInfos } from '../Weather/WeatherInfos';


// Card for an individual forefacst
export const HourForecast = (props) => {
  if (props.weather.length === 0) {
    return '';
  }

  const weather = props.weather.slice().pop();
  return (
    <Card className="py-3 text-center mb-2 mr-2">
      <strong> {moment.unix(props.dt).format('HH:mm A')} </strong>
      <WeatherIcon icon={weather.icon} desc={weather.description} center/>
      <WeatherInfos
        weather={weather.main}
        temp={props.temp}
        humidity={props.humidity}
        wind={props.wind}
        center />
    </Card>
  );
};

// Prop types
HourForecast.propTypes = {
  dt: PropTypes.number,
  weather: PropTypes.array,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
};