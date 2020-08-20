import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import moment from 'moment';
import { countries } from 'country-data-list';

import CityWeather from './CityWeather';
import './city-infos.css';


/**
 * CityInfos
 * Display informations about a city
 */
export default function CityInfos({name, lat, lon, country, sunrise, sunset, weatherInfos}) {
  // Renders country label, name and emoji
  const renderCountry = (code) => (
    <React.Fragment>{countries[code].emoji} {countries[code].name}</React.Fragment>
  )

  // Renders sunrise / sunset timestamps
  const renderTimestamp = (time) => moment.unix(time).format('H:mm A');

  return (
    <Card className="city-infos shadow-sm">
      <Card.Body className="pb-0">
        <Card.Title>{name}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          Lat: {lat}, Lon: {lon}
        </Card.Subtitle>

        <CityWeather
          weather={weatherInfos.weather}
          main={weatherInfos.main}
          wind={weatherInfos.wind.speed} />
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

CityInfos.propTypeps = {
  name: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
  weatherInfos: PropTypes.shape({
    weather: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      description: PropTypes.string,
      main: PropTypes.string,
    })),
    main: PropTypes.shape({
      temp: PropTypes.number,
      humidity: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}