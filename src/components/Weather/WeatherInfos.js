import React from 'react';
import windImg from './wind.png';

// Display information on a particular forecast (temperature, humidity, wind, ..)
const WeatherInfos = (props) => {
  const data = props.infos;
  const weather = data.weather.slice().pop();

  let className = 'd-flex flex-column';
  if (props.center)
    className += ' justify-content-center';
  if (props.marginTop) {
    className += ' mt-3';
  }

  return (
    <div className={className}>
      <small>{weather.main}</small>
      <div className="flex-row">
        <span> {data.main.temp.toFixed(1)}C - &nbsp;</span>
        <span className="text-info"> {data.main.humidity}% </span>
      </div>
      <div className="flex-row">
        <img src={windImg} alt="wind" title="wind" width="16" height="16" className="mr-1"/>
        <small>{data.wind.speed} m/s</small>
      </div>
    </div>
  );
}

export default WeatherInfos;