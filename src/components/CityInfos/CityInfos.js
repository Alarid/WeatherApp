import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import moment from 'moment';
import { countries } from 'country-data-list';

import WeatherIcon from '../Weather/WeatherIcon';
import WeatherInfos from '../Weather/WeatherInfos';

import './city-infos.css';

// Renders country label, name and emoji
const renderCountry = (code) => (
  <React.Fragment>{countries[code].emoji} {countries[code].name}</React.Fragment>
)


// Renders sunrise / sunset timestamps
const renderTimestamp = (time) => moment.unix(time).format('H:mm A');


// Renders city's current weather
const Weather = ({weather, main, wind, ...props}) => {
  if (weather.length === 0) {
    return '';
  }
  const w = weather.slice().pop();
  return (
    <div className="d-flex flex-row">
      <WeatherIcon icon={w.icon} desc={w.description}/>
      <WeatherInfos
        weather={w.main}
        temp={main.temp}
        humidity={main.humidity}
        wind={wind.speed}
        marginTop />
    </div>
  )
}

/**
 * CityInfos
 * Display informations about a city
 */
export default function CityInfos({name, lat, lon, country, sunrise, sunset, weatherInfos, ...props}) {
  return (
    <Card className="city-infos shadow-sm">
      <Card.Body className="pb-0">
        <Card.Title>{name}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          Lat: {lat}, Lon: {lon}
        </Card.Subtitle>

        <Weather
          weather={weatherInfos.weather}
          main={weatherInfos.main}
          wind={weatherInfos.wind}/>
      </Card.Body>
      <ListGroup className="list-group-flush infos">
        <ListGroup.Item>
          <label>Country</label> {renderCountry(country)}
        </ListGroup.Item>

        <ListGroup.Item>
          <label>Sunrise</label> {renderTimestamp(sunrise)}
        </ListGroup.Item>

        <ListGroup.Item>
          <label>Sunset</label> {renderTimestamp(sunset)} 
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}