import React from 'react';
import windImg from './wind.png';
import PropTypes from 'prop-types';

// Display information on a particular forecast (temperature, humidity, wind, ..)
export default function WeatherInfos ({weather, temp, humidity, wind, center, marginTop}) {
  let className = 'd-flex flex-column';
  if (center)
    className += ' text-center';
  if (marginTop) {
    className += ' mt-3';
  }

  return (
    <div className={className}>
      <small>{weather}</small>
      <div className="flex-row">
        <span> {temp.toFixed(1)}C - &nbsp;</span>
        <span className="text-info"> {humidity}% </span>
      </div>
      <div className="flex-row">
        <img src={windImg} alt="wind" title="wind" width="16" height="16" className="mr-1"/>
        <small>{wind} m/s</small>
      </div>
    </div>
  );
}

WeatherInfos.propTypes = {
  weather: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  center: PropTypes.bool,
  marginTop: PropTypes.bool,
}

WeatherInfos.defaultProps = {
  center: false,
  marginTop: false,
}