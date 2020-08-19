import React from 'react';
import windImg from './wind.png';
import PropTypes from 'prop-types';

// Display information on a particular forecast (temperature, humidity, wind, ..)
export const WeatherInfos = ({weather, temp, humidity, wind, ...props}) => {
  let className = 'd-flex flex-column';
  if (props.center)
    className += ' justify-content-center';
  if (props.marginTop) {
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
  weather: PropTypes.string,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
}