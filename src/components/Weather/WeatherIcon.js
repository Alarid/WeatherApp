import React from 'react';
import PropTypes from 'prop-types'

export default function WeatherIcon({ icon, desc, center }) {
  const weatherIconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <img
      src={weatherIconSrc}
      alt="weather icon"
      title={desc}
      width="100"
      height="100"
      className={center ? 'd-block mx-auto' : ''} />
  );
}

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

WeatherIcon.defaultProps = {
  center: false,
}