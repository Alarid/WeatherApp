import React from 'react'
import PropTypes from 'prop-types'

import WeatherIcon from '../Weather/WeatherIcon';
import WeatherInfos from '../Weather/WeatherInfos';

// Renders city's current weather
export default function CityWeather ({weather, main, wind}) {
  if (weather.length === 0) {
    return <p><i>Unable to fetch current weather</i></p>;
  }
  const w = weather.slice().pop();
  return (
    <div className="d-flex flex-row">
      <WeatherIcon icon={w.icon} desc={w.description}/>
      <WeatherInfos
        weather={w.main}
        temp={main.temp}
        humidity={main.humidity}
        wind={wind}
        marginTop />
    </div>
  )
}

CityWeather.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.string,
  })).isRequired,
  main: PropTypes.shape({
    temp: PropTypes.number,
    humidity: PropTypes.number,
  }).isRequired,
  wind: PropTypes.number.isRequired,
}