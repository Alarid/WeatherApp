import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

import moment from 'moment';

import WeatherIcon from '../Weather/WeatherIcon';
import WeatherInfos from '../Weather/WeatherInfos';


// Card for an individual forefacst
export const HourForecast = ({ weather, dt, ...props }) => (
  <Card className="py-3 mb-2 mr-2">
    <strong className="mx-auto"> {moment.unix(dt).format('HH:mm A')} </strong>
    <WeatherIcon icon={weather.icon} desc={weather.description} center/>
    <WeatherInfos
      weather={weather.main}
      center
      {...props}/>
  </Card>
);


// Prop types
HourForecast.propTypes = {
  dt: PropTypes.number,
  weather: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
  }).isRequired,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
};