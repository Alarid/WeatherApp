import React from 'react';

const WeatherIcon = (props) => {
  const weatherIconSrc = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
  return (
    <img src={weatherIconSrc} alt="weather icon" width="100" height="100" className={props.center ? 'mx-auto' : ''} />
  );
}

export default WeatherIcon;